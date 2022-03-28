module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],

  content: [],
  daisyui: {
    themes: [
      {
        mingtheme: {
          primary: "#ea580c",
          secondary: "#4084dd",
          accent: "#84cc16",
          neutral: "#171E21",
          "base-100": "#F4F4F6",
          info: "#2165ED",
          success: "#2dd4bf",
          warning: "#fde047",
          error: "#e11d48",
        },
      },
      "cyberpunk",
      "dark",
      "light",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
