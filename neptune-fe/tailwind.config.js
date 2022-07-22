/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#079DCA",
        secondary: "#4C5472",
        tertiary: "#566086",
        quaternary: "#2F3650",
        gray: "#EEEEEE",
        lightGray: "#C1C1C1",
        darkGray: "#484848"
      }
    }
  },
  plugins: []
};
