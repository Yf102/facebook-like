import type { Config } from "tailwindcss";

const config: Config = {
  content: {
    files: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    width: {
      "modal-mobile": "80%",
      "modal-desktop": "12%",
      "mobile-page": "100%",
      "desktop-page": "76%",
    },
  },
  plugins: [],
};
export default config;
