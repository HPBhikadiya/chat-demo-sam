/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        chatBodyHeight: "calc(100vh - 125px)",
      },
    },
  },
  plugins: [],
};
