const fs = require('fs');
const path = require('path');
const JSONStream = require('JSONStream');

const stream = fs.createReadStream(path.join(__dirname, '../data/normalized.json'));

const scores = {};

stream
  .pipe(JSONStream.parse('*'))
  .on('data', developer => {
    developer.repos.forEach(repo => {
      if (typeof scores[repo.language] === 'undefined') {
        scores[repo.language] = { stars: repo.stars, repos: 1 };
      } else {
        scores[repo.language] = {
          stars: scores[repo.language].stars + repo.stars,
          repos: scores[repo.language].repos + 1,
        };
      }
    });
  })
  .on('end', () => {
    scores.Fortran = {
      score: scores.Fortran.score + scores.FORTRAN.score,
      stars: scores.Fortran.stars + scores.FORTRAN.stars,
      repos: scores.Fortran.repos + scores.FORTRAN.repos,
    };
    delete scores.FORTRAN;

    const result = Object.entries(scores).reduce(
      (prev, [name, data]) => ({
        ...prev,
        [name]: { score: data.stars + data.repos * 1.2, stars: data.stars, repos: data.repos },
      }),
      {},
    );

    fs.writeFileSync(path.join(__dirname, '../data/languageScores.json'), JSON.stringify(result));
  });
