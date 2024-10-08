/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        fade: "var(--fade)",
      },
    },
  },
  plugins: [],
};
