/** @type {import('tailwindcss').Config} */
export default {
  // 1. Informa ao Tailwind onde ele deve procurar por classes CSS
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // 2. Habilita o dark mode baseado na classe 'dark' no HTML
  darkMode: 'class',
  theme: {
    extend: {
      // 3. Adiciona nossas cores customizadas (nossos tokens)
      colors: {
        'sand': '#dcc9a9',
        'ink': '#2a2a2a',
        'primary': '#b83a2d',
        'secondary': '#4e6851',
        'surface-light': '#c9b696',
        'surface-dark': '#2f2f2f',
        'background-dark': '#1c1c1c',
      },
      transitionDuration: {
        '200': '200ms',
      },
    },
  },
  plugins: [],
}