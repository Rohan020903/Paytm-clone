/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

var PaytmConfig = {
  mid: "XXXXXXXXXXXXXXXXXXXX",
  key: "XXXXXXXXXXXXXXXX",
  website: "XXXXXXXXXX"
}
module.exports.PaytmConfig = PaytmConfig