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
        'txt-primary': '#ffd700',
      },
    },
    backgroundImage: {
      'bg': "url('https://photo-cdn2.icons8.com/eocfJ-BHCwZx5eAH-tquDKjstDV6OptIXIy0utgNWFM/rs:fit:1612:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi8yODY4OGViOWI0/NDg0ZDFkODkxYjQ1/ZjE0MmYzNWZlZi5q/cGc.jpg')",
      'footer-texture': "url('/img/footer-texture.png')",
    }
  },
  plugins: [],
}
