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
        scores[repo.language] = { stars: repo.stars, repos: 1, developers: [developer.github_id] };
      } else {
        scores[repo.language] = {
          stars: scores[repo.language].stars + repo.stars,
          repos: scores[repo.language].repos + 1,
          developers:
            scores[repo.language].developers.indexOf(developer.github_id) > -1
              ? scores[repo.language].developers
              : [...scores[repo.language].developers, developer.github_id],
        };
      }
    });
  })
  .on('end', () => {
    scores.Fortran = {
      score: scores.Fortran.score + scores.FORTRAN.score,
      stars: scores.Fortran.stars + scores.FORTRAN.stars,
      repos: scores.Fortran.repos + scores.FORTRAN.repos,
      developers: [...new Set([...scores.Fortran.developers, ...scores.FORTRAN.developers])],
    };
    delete scores.FORTRAN;

    scores.Matlab = {
      score: scores.Matlab.score + scores.MATLAB.score,
      stars: scores.Matlab.stars + scores.MATLAB.stars,
      repos: scores.Matlab.repos + scores.MATLAB.repos,
      developers: [...new Set([...scores.Matlab.developers, ...scores.MATLAB.developers])],
    };
    delete scores.MATLAB;

    scores.Pawn = {
      score: scores.Pawn.score + scores.PAWN.score,
      stars: scores.Pawn.stars + scores.PAWN.stars,
      repos: scores.Pawn.repos + scores.PAWN.repos,
      developers: [...new Set([...scores.Pawn.developers, ...scores.PAWN.developers])],
    };
    delete scores.PAWN;

    const result = Object.entries(scores).reduce(
      (prev, [name, data]) => ({
        ...prev,
        [name]: {
          score: data.stars + data.repos * 1.2,
          stars: data.stars,
          repos: data.repos,
          developers: data.developers.length,
        },
      }),
      {},
    );

    fs.writeFileSync(path.join(__dirname, '../data/languageScores.json'), JSON.stringify(result));
  });
