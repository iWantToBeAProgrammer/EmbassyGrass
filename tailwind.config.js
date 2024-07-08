/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#A1DD70",
          secondary: "#28887A",
          accent: "#EA3535",
          "base-100": "#F5F7F8",
          neutral: "#030605",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        "karla-italic": ["karla-italic"],
        karla: ["karla"],
        dmserif: ["dmserif"],
        jost: ["jost"],
      },
      backgroundImage: {
        "top-background": "url('/assets/Images/Background_Home.jpg')",
        portfolio: "url('/assets/portofolio.jpg')",
        sale: "url('/assets/sale.jpg')",
        survey: "url('/assets/survey.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
