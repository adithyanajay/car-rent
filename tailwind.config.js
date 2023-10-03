/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {colors: {
      mainbg: "#eef1f6",
      contentbg: "#f1f6fd",
      mainblue: "#4a9aed",
      secondblue: "#73b6f2",
      heartbluebg: "#dbebfa",
      pageGray: "#4e5a72",
      mainText: "#32334d",
      secondaryText: "#515c75"
    },},
  },
  plugins: [],
}

