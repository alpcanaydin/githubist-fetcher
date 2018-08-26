/* eslint-disable class-methods-use-this */

const Octokit = require('@octokit/rest');

class Github {
  constructor(tokens) {
    this.octokit = Octokit();

    this.tokens = tokens;
    this.activeTokenIndex = -1;

    this.updateActiveToken();
  }

  updateActiveToken() {
    if (this.activeTokenIndex + 1 === this.tokens.length) {
      this.activeTokenIndex = 0;
    } else {
      this.activeTokenIndex = this.activeTokenIndex + 1;
    }

    this.octokit.authenticate({
      type: 'oauth',
      token: this.tokens[this.activeTokenIndex],
    });
  }

  getPageLinks(response) {
    const links = {};

    (response.headers.link || '').replace(/<([^>]*)>;\s*rel="([\w]*)"/g, (m, uri, type) => {
      links[type] = uri;
    });

    return links;
  }

  updateActiveTokenIfNecessary(response) {
    if (parseInt(response.headers['x-ratelimit-remaining'], 10) === 1) {
      this.updateActiveToken();
    }
  }

  async searchUsers(q, sort, order, page = 1, per_page = 100, data = []) {
    try {
      const response = await this.octokit.search.users({ q, sort, order, page, per_page });
      this.updateActiveTokenIfNecessary(response);

      if (this.getPageLinks(response).next) {
        return this.searchUsers(q, sort, order, page + 1, per_page, [
          ...data,
          ...response.data.items,
        ]);
      }

      return [...data, ...response.data.items];
    } catch (err) {
      this.updateActiveToken();
      return this.searchUsers(q, sort, order, page, per_page, data);
    }
  }

  async getUser(username) {
    try {
      const response = await this.octokit.users.getForUser({ username });
      this.updateActiveTokenIfNecessary(response);

      return response.data;
    } catch (err) {
      if (err.code === 404) {
        throw new Error('User not found.');
      }

      this.updateActiveToken();
      return this.getUser(username);
    }
  }

  async getReposForUser(
    username,
    type,
    sort = 'created',
    direction = 'asc',
    page = 1,
    per_page = 100,
    data = [],
  ) {
    try {
      const response = await this.octokit.repos.getForUser({
        username,
        type,
        sort,
        direction,
        page,
        per_page,
      });

      this.updateActiveTokenIfNecessary(response);

      if (this.getPageLinks(response).next) {
        return this.getReposForUser(username, type, sort, direction, page + 1, per_page, [
          ...data,
          ...response.data,
        ]);
      }

      return [...data, ...response.data];
    } catch (err) {
      return data;
    }
  }

  async getUserAndRepos(username) {
    const [user, repos] = await Promise.all([
      this.getUser(username),
      this.getReposForUser(username),
    ]);

    return { ...user, repos };
  }
}

module.exports = Github;

/* eslint-enable class-methods-use-this */
