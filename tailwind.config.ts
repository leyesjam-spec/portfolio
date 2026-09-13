import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#00366D",
          50: "#e8eef5",
          100: "#c5d3e4",
          200: "#8ba8c6",
          800: "#002850",
          900: "#001a36",
        },
      },
    },
  },
};

export default config;
