const fs = require('fs');
const path = require('path');
const JSONStream = require('JSONStream');

const cityUtil = require('../utils/city');
const normalizer = require('../utils/normalizer');

const processCity = (city, readStream, writeStream) =>
  new Promise((resolve, reject) => {
    readStream
      .pipe(JSONStream.parse('*'))
      .on('data', item => {
        const normalized = normalizer(city, item);

        if (normalized.github_location) {
          writeStream.write(normalized);
        }
      })
      .on('error', reject)
      .on('end', resolve);
  });

const main = async () => {
  const cities = cityUtil.getAll();
  const outputFile = path.join(__dirname, '..', 'data', 'prenormalized.json');

  const writeStream = fs.createWriteStream(outputFile);
  const jsonStream = JSONStream.stringify();

  jsonStream.pipe(writeStream);

  /* eslint-disable no-restricted-syntax, no-await-in-loop */
  for (const city of cities) {
    const cityStream = fs.createReadStream(
      path.join(__dirname, '..', 'data/users-and-repos', `${city.name}.json`),
    );

    console.log(`Started to processing ${city.name}.`);
    await processCity(city.name, cityStream, jsonStream);
    console.log(`${city.name} has been finished.`);
  }
  /* eslint-enable no-restricted-syntax, no-await-in-loop */

  jsonStream.end();
};

main();
