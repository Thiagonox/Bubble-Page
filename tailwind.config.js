/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'txt-primary': '#FFF',
      },
    },
    backgroundImage: {
      'bg': "url('https://photo-cdn2.icons8.com/r76K5jvMAw40bwJlrIlw8hIr-N1aT_ljWIchuaEpha8/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi9iMWNmNTQyMWVk/Njk0ZWExYTM1ZGVl/YTc3NDRjYmM0ZC5q/cGc.jpg')",
    }
  },
  plugins: [],
}
