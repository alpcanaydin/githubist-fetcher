const developerNormalizer = (developer, city, score, totalStarred) => ({
  username: developer.login,
  email: developer.email || null,
  github_id: developer.id,
  name: developer.name,
  avatar_url: developer.avatar_url,
  bio: developer.bio,
  company: developer.company || null,
  github_location: developer.location,
  github_url: developer.html_url,
  followers: developer.followers,
  following: developer.following,
  public_repos: developer.public_repos,
  total_starred: totalStarred,
  score,
  location: city,
  github_created_at: developer.created_at,
});

const repoNormalizer = repo => ({
  name: repo.name,
  slug: repo.full_name,
  description: repo.description,
  github_id: repo.id,
  github_url: repo.html_url,
  stars: repo.stargazers_count,
  forks: repo.forks_count,
  language: repo.language || 'Bilinmiyor',
  github_created_at: repo.created_at,
});

const normalizer = (city, data) => {
  const normalizedCity = city === 'van,turkey' ? 'van' : city;
  const repos = (data.repos || [])
    .filter(r => r.fork === false && r.language !== null)
    .map(repoNormalizer);
  const totalStarred = repos.reduce((prev, cur) => prev + cur.stars, 0);
  const developerScore = data.followers * 2 + totalStarred;

  const developer = developerNormalizer(data, normalizedCity, developerScore, totalStarred);

  return { ...developer, repos };
};

module.exports = normalizer;
