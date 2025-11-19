//** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sky blues
        'sky-lightest': '#f0f9ff', // Tailwind sky-50
        'sky-lighter': '#e0f2fe',  // Tailwind sky-100
        'sky-light': '#bae6fd',    // Tailwind sky-200
        'sky': '#38bdf8',          // Tailwind sky-400/500
        'sky-dark': '#0ea5e9',     // Tailwind sky-600
        'sky-darker': '#0369a1',   // Tailwind sky-800

        // Classic blues
        'blue-lightest': '#eff6ff', // blue-50
        'blue-lighter': '#dbeafe',  // blue-100
        'blue-light': '#bfdbfe',    // blue-200
        'blue': '#3b82f6',          // blue-500
        'blue-dark': '#2563eb',     // blue-600
        'blue-darker': '#1d4ed8',   // blue-700

        // Indigo shades
        'indigo-lightest': '#eef2ff', // indigo-50
        'indigo-lighter': '#e0e7ff',  // indigo-100
        'indigo-light': '#c7d2fe',    // indigo-200
        'indigo': '#6366f1',          // indigo-500
        'indigo-dark': '#4f46e5',     // indigo-600
        'indigo-darker': '#3730a3',   // indigo-700

        // Cyan / Teal shades (optional accents)
        'cyan-lightest': '#ecfeff', // cyan-50
        'cyan-lighter': '#cffafe',  // cyan-100
        'cyan-light': '#a5f3fc',    // cyan-200
        'cyan': '#06b6d4',          // cyan-500
        'cyan-dark': '#0891b2',     // cyan-600
        'cyan-darker': '#0e7490',   // cyan-700
      }
    },
  },
  plugins: [],
}
