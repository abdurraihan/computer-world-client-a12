module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        computer: {
          primary: "#414B63",
          secondary: "#D4D9E3",
          accent: "#3A4256",
          neutral: "#3d4451",
        
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
