/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Lora', 'serif'],
        roboto: ['Roboto', 'serif']
      },
      colors: {
        transparent: 'transparent',
        white: '#FFF',
        black: '#000',
        blue: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          150: '#F1FBFF',
          160: '#E8F7FD',
          170: '#DFF3F5',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#2196F3',
          600: '#1E88E5',
          700: '#1976D2',
          800: '#1565C0',
          900: '#0D47A1'
        },
        red: {
          50: '#FFEBEE',
          100: '#FFCDD2',
          200: '#EF9A9A',
          300: '#E57373',
          400: '#EF5350',
          500: '#F44336',
          600: '#E53935',
          700: '#D32F2F',
          800: '#C62828',
          900: '#B71B1C'
        },
        yellow: {
          50: '#FFF9E1',
          100: '#FFEEB4',
          200: '#FFE483',
          300: '#FFDA4F',
          400: '#FFD026',
          500: '#FFC800',
          600: '#FFB900',
          700: '#FFA600',
          800: '#FF9500',
          900: '#FF7500'
        },
        green: {
          50: '#E6F6EC',
          100: '#C3E9D0',
          200: '#9BDBB3',
          300: '#70CD94',
          400: '#4DC27E',
          500: '#1FB767',
          600: '#16A75C',
          700: '#069550',
          800: '#008444',
          900: '#006430'
        },
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          150: '#FBFBFB',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121'
        },
        'blue-gray': {
          50: '#E3E7ED',
          100: '#B9C3D3',
          200: '#8D9DB5',
          300: '#627798',
          400: '#415C84',
          500: '#1A4373',
          600: '#133C6B',
          700: '#083461',
          800: '#022B55',
          900: '#001B3D'
        }
      }
    }
  },
  plugins: [],
}
