/** @type {import('lint-staged').Config} */
export default {
  "*.{ts,tsx}": ["prettier --write"], // add eslint --fix
  "*.{css,js,jsx,json,html,yml,yaml,md}": ["prettier --write"],
};
