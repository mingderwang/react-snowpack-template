module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],

  content: [],
  daisyui: {
    themes: ["cyberpunk", "dark", "light"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
