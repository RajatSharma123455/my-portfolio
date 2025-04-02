/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6d28d9', // Deep purple
        secondary: '#4c1d95', // Darker purple
        dark: '#0f172a', // Very dark blue
        accent: '#8b5cf6', // Lighter purple for accents
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'fill-bar': 'fillBar 1.5s ease-out forwards',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fillBar: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
}