
export default {
  //  content: [
  //   `src/**/*.{vue,js,ts}`,
  //  ],

  // content: ['**/*.{js,ts,jsx,tsx,vue}'],
  // content: [
    // `components/**/*.{vue,js,ts}`,
    // `layouts/**/*.vue`,
    // `pages/**/*.vue`,
    // `composables/**/*.{js,ts}`,
    // `plugins/**/*.{js,vue,ts}`,
    // `App.{js,ts,vue}`,
    // `app.{js,ts,vue}`,
  // ],

  content: [
    "**/*/index.html",
    "**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-main": "#414066"
      }
    },
  },
  tailwindcss: {
    viewer: false,
    exposeConfig: true,
  },
}