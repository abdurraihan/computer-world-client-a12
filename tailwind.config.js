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
          primary: "#075985",
          secondary: "#f0f9ff",
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
