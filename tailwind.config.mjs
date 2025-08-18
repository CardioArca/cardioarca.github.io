/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx}",
    "./components/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx}",
    "./pages/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx}",
    "./node_modules/shadcn-ui-react-accordion/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#2196F3",
        "accent-blue": "#007bff",
        "accent-blue-transparent": "rgba(0, 123, 255, 0.1)",
        "light-blue": "#e6f0fa",
        "blue-800": "#1E40AF",
        "gray-600": "#4B5563",
        "gray-300": "#D1D5DB",
        "gray-800": "#1F2937",
        orange: "#FFA500",
        pink: "#FFC0CB",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
