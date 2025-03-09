/** @type {import("prettier").Config} */
module.exports = {
  importOrder: ["^react(.*)$", "<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  tailwindFunctions: ["clsx"],
};
