/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'vazir': ['Vazirmatn', 'sans-serif'],
      },
      colors: {
        'zhuan': {
          'dark-brown': '#3b1514',
          'dark-green': '#14261a',
          'light': '#eef3f1',
          'gold': '#ccb28b',
        },
        'coffee': {
          50: '#fdf8f3',
          100: '#fae6d4',
          200: '#f4c4a1',
          300: '#ed9f6d',
          400: '#e67e22',
          500: '#d35400',
          600: '#b7471a',
          700: '#973b1a',
          800: '#7a321c',
          900: '#642c1a',
        },
        'cafe': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'lg-gold': '0 10px 15px -3px rgba(204, 178, 139, 0.1), 0 4px 6px -2px rgba(204, 178, 139, 0.05)',
      }
    },
  },
  plugins: [],
};
