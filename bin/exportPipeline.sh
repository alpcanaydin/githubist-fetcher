echo "Prenormalizing users and repos..."
node bin/prenormalize.js

echo "Normalizing users and repos..."
node bin/normalize.js

echo "Creating location scores..."
node bin/createLocationScores.js

echo "Creating language scores..."
node bin/createLanguageScores.js

echo "Moving to backend artificats"
yarn run move
