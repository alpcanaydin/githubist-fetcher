/* eslint-disable no-restricted-syntax, no-await-in-loop */

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

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
    console.log(`Started to searching for ${city.name}`);

    const combinations = City.createSearchCombinations(city);

    const promises = [];
    combinations.forEach(combination => promises.push(github.searchUsers(combination)));
    const responses = await Promise.all(promises);

    console.log(`Data fetched for ${city.name}`);

    console.log(`Started to concatenation of responses.`);
    const output = responses.reduce(
      (prev, cur) => [...prev, ...cur.map(c => ({ username: c.login, id: c.id }))],
      [],
    );

    console.log(`Saving to file`);
    fs.writeFileSync(
      path.join(__dirname, '../data/search/', `${city.name}.json`),
      JSON.stringify(output),
    );

    console.log(`${output.length} developers saved for ${city.name}!\n`);
  }
};

main();
/* eslint-enable no-restricted-syntax, no-await-in-loop */
