/* eslint-disable no-restricted-syntax, no-await-in-loop */

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const JSONStream = require('JSONStream');

const City = require('../utils/city');
const Github = require('../utils/github');

dotenv.config({ path: `${__dirname}/../.env` });

const main = async () => {
  let cities = City.getAll();

  const cityName = process.argv[2];
  if (cityName) {
    cities = City.filter(cityName);
  }

  if (!cities.length) {
    throw new Error('Could not be found any city.');
  }

  const githubTokens = (process.env.GITHUB_TOKENS || '').split(',');
  const github = new Github(githubTokens);

  for (const city of cities) {
    console.log(`Started to processing for ${city.name}`);

    const writeStream = fs.createWriteStream(
      path.join(__dirname, '../data/users-and-repos/', `${city.name}.json`),
    );
    const jsonStream = JSONStream.stringify();
    jsonStream.pipe(writeStream);

    /* eslint-disable global-require, import/no-dynamic-require */
    const users = require(`../data/search/${city.name}.json`);
    /* eslint-enable global-require, import/no-dynamic-require */

    // Respect to rate limits!
    // We have to make these requests synchronously.
    for (const user of users) {
      console.log(`Started to fetching ${user.username}`);

      try {
        const userData = await github.getUserAndRepos(user.username);
        jsonStream.write(userData);
        console.log(`${user.username} has been finished.`);
      } catch (err) {
        console.log(`Error occured while fetching ${user.username}, skipping.`);
        console.log(err);
      }
    }

    jsonStream.end();
    console.log(`Developers saved for ${city.name}`);
  }
};

main();
/* eslint-enable no-restricted-syntax, no-await-in-loop */
