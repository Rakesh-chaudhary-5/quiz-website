/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'rightBottom': '4px 4px 0px 4px #01AB08',
        'circleShadow': '0px -5px 25px -5px ',
      },
    },
  },
  plugins: [],
}

