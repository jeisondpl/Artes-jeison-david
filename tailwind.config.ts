import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Paleta de colores cálidos para el artista
      colors: {
        ocre: {
          50: '#fdf8f1',
          100: '#f9edd9',
          200: '#f2d8b0',
          300: '#eabc7e',
          400: '#e29a4a',
          500: '#db8129',
          600: '#c4671f',
          700: '#a34f1d',
          800: '#84401f',
          900: '#6c361c',
        },
        terracota: {
          50: '#fdf3f1',
          100: '#fce4df',
          200: '#fbcdc4',
          300: '#f7aa9a',
          400: '#f07d62',
          500: '#e65a3a',
          600: '#d3401f',
          700: '#b0331a',
          800: '#922d1a',
          900: '#792b1c',
        },
        crema: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#fbf3e6',
          300: '#f7e9d3',
          400: '#f1dbb8',
          500: '#e8c897',
          600: '#dbb076',
          700: '#c9935a',
          800: '#a6764a',
          900: '#87613f',
        },
      },
      // Tipografía elegante
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      // Animaciones suaves
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
