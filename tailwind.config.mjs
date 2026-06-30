/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      colors: {
        hell: {
          red: '#b91c1c',
          dark: '#0c0c0c',
          border: '#3f1f1f',
        },
      },
    },
  },
  plugins: [],
};
