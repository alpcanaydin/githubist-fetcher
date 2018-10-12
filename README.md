# Github.ist Fetcher

This is the Fetcher repo for https://github.ist. You may also want to take a look to [Web](https://github.com/alpcanaydin/githubist) and [API](https://github.com/alpcanaydin/githubist-api)

## Installation

You need to have `yarn` installed in your computer. After, simple run the command `yarn` in project directory in order to install dependencies. As last step, please copy `.env.sample` file as `.env` and update the variables with the actual values you want to use.

## Running the Commands

There are several commands in order the fetch data from Github and process it.

- Run `node bin/searchUsers.js` command to search Github users whose location is a place from Turkey.
- Run `node bin/getUsersAndRepos.js` command to get users and theirs repos which collected from the command above.
- Run `node bin/exportPipeline.sh` command to normalize all data and move it to API

There is also `node bin/pipeline.sh` command which runs all required commands in order.

If you want to use the current data in Github.ist, you can download from here;
[https://data.github.ist/githubist.json.zip](https://data.github.ist/githubist.json.zip)
