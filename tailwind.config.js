/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1180px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        // bodyColor: "#756a62",
        bodyColor: "#212529",
        // bgColor: "#FF8500",
        // lightText: "#EB6C02",
        // lightText: "#0DCAF0",
        resumetext: "#fd562a",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        // designColor: "#fd562a",
        // designColor: "#FFB400",
        designColor: "#ff014f",
      },
      bgImage: {
        bgImage: "url(../../assets/images/bg-images/Screenshot.png)",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
};
