mkdir -p data/search
mkdir -p data/users-and-repos

echo "Searching users from Turkey..."
node bin/searchUsers.js

echo "Collecting users and repos information..."
node bin/getUsersAndRepos.js

sh bin/exportPipeline.sh

echo "All done!"
