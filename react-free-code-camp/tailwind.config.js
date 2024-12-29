/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        WorkSans: ["Work Sans", "serif"]
      },
      colors: {
        react: '#61DBFB',
        dark: '#121212'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px"
      }
    }
  },
  plugins: [],
}

