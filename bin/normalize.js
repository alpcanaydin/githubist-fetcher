const fs = require('fs');
const path = require('path');
const JSONStream = require('JSONStream');

const usernameMap = {};

const prenormalized = require('../data/prenormalized.json');

const writeStream = JSONStream.stringify();
const stream = fs.createWriteStream(path.join(__dirname, '../data/normalized.json'));

writeStream.pipe(stream);

prenormalized.forEach(item => {
  if (!usernameMap[item.username]) {
    writeStream.write(item);
    usernameMap[item.username] = 1;
  }
});

writeStream.end();
