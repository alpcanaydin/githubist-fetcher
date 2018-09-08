const fs = require('fs');
const path = require('path');
const JSONStream = require('JSONStream');

const stream = fs.createReadStream(path.join(__dirname, '../data/normalized.json'));

const scores = {};

stream
  .pipe(JSONStream.parse('*'))
  .on('data', developer => {
    if (typeof scores[developer.location] === 'undefined') {
      scores[developer.location] = {
        score: developer.score,
        repos: developer.repos.length,
        developers: 1,
      };
    } else {
      scores[developer.location] = {
        score: scores[developer.location].score + developer.score,
        repos: scores[developer.location].repos + developer.repos.length,
        developers: scores[developer.location].developers + 1,
      };
    }
  })
  .on('end', () => {
    fs.writeFileSync(path.join(__dirname, '../data/locationScores.json'), JSON.stringify(scores));
  });
