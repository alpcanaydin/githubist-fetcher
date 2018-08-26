const fs = require('fs');
const path = require('path');
const JSONStream = require('JSONStream');

const stream = fs.createReadStream(path.join(__dirname, '../data/normalized.json'));

const scores = {};

stream
  .pipe(JSONStream.parse('*'))
  .on('data', developer => {
    if (typeof scores[developer.location] === 'undefined') {
      scores[developer.location] = developer.score;
    } else {
      scores[developer.location] += developer.score;
    }
  })
  .on('end', () => {
    fs.writeFileSync(path.join(__dirname, '../data/locationScores.json'), JSON.stringify(scores));
  });
