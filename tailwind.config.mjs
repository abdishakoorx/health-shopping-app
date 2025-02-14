/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fbfbfe",
        darkBackground: "#010104",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1c74e9",
          dark: "#166fe3",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#00bdd6",
          dark: "#29e6ff",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#ff5d47",
          dark: "#b81500",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
