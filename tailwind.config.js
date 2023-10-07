/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#0D0D11',
        'gray-light': '#19191D',
        'gray-text' : '#9C9C9C',
        'primary-blue' : '#3D96F4'
      }
    },
  },
  plugins: [],
}

