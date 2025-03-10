/** @type {import('lint-staged').Config} */
module.exports = {
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{css,js,jsx,json,html,yml,yaml,md}": ["prettier --write"],
};
