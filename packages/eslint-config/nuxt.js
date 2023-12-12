/** @type {import("eslint").Linter.Config} */
module.exports = {
    "env": {
      "browser": true,
      "node": true
    },
    "extends": [
      "@nuxtjs/eslint-config-typescript",
      "plugin:nuxt/recommended",
      "plugin:prettier/recommended"
    ],
    "rules": {
      // "vue/no-v-html": "off",
      // "vue/no-multiple-template-root": "off",
      // "vue/multi-word-component-names": 0,
      // // "vue/no-multiple-template-root": 0,
      // "prettier/prettier": ["error", { "singleQuote": true, "semi": false }]
    }
  
}