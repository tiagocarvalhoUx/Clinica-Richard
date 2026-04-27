import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A6B8A',
          50: '#EFF8FB',
          100: '#D6ECF3',
          200: '#AED9E7',
          300: '#7FBFD3',
          400: '#4FA1B9',
          500: '#1A6B8A',
          600: '#16596F',
          700: '#124759',
          800: '#0E3744',
          900: '#0A2932',
        },
        secondary: {
          DEFAULT: '#2EAF7D',
          50: '#EBFBF3',
          100: '#CBF3DD',
          200: '#9EE6BF',
          300: '#6CD79E',
          400: '#42C387',
          500: '#2EAF7D',
          600: '#218D63',
          700: '#1A6E4D',
          800: '#13503A',
          900: '#0D3727',
        },
        accent: '#F0F9FF',
        dark: '#1A2332',
        light: '#F8FAFB',
        danger: {
          DEFAULT: '#E53E3E',
          50: '#FEF2F2',
          100: '#FDE3E3',
          500: '#E53E3E',
          600: '#C53030',
          700: '#9B2C2C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)',
        card: '0 4px 14px -4px rgba(26, 107, 138, 0.10), 0 2px 6px -2px rgba(26, 107, 138, 0.06)',
        elevated: '0 20px 40px -12px rgba(26, 107, 138, 0.18), 0 8px 16px -8px rgba(26, 107, 138, 0.10)',
        ring: '0 0 0 4px rgba(26, 107, 138, 0.18)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out both',
        'fade-in-up': 'fade-in-up 0.7s ease-out both',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      backgroundImage: {
        'grid-soft':
          'radial-gradient(rgba(26,107,138,0.10) 1px, transparent 1px)',
        'gradient-hero':
          'linear-gradient(135deg, #EFF8FB 0%, #F0F9FF 40%, #EBFBF3 100%)',
        'gradient-primary':
          'linear-gradient(135deg, #1A6B8A 0%, #2EAF7D 100%)',
      },
      backgroundSize: {
        grid: '24px 24px',
      },
    },
  },
  plugins: [],
} satisfies Config;
