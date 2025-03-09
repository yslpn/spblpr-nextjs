/** @type {import('lint-staged').Config} */
export default {
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{css,js,jsx,json,html,yml,yaml,md}": ["prettier --write"],
};
