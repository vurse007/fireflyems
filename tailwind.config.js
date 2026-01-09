/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        firefly: {
          50: '#fdf4f0',
          100: '#f9e5dd',
          200: '#f3c9b8',
          300: '#e8a891',
          400: '#d97556',
          500: '#c96344',
          600: '#b5503a',
          700: '#a04530',
          800: '#7a3f30',
          900: '#5c3426',
          950: '#3d1f17',
        },
        accent: {
          gold: '#c9836a',
          amber: '#b5704f',
          warm: '#d99473',
        },
        dark: {
          900: '#0f0a08',
          800: '#1a120d',
          700: '#251a13',
          600: '#302218',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(201, 99, 68, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(201, 99, 68, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(201, 99, 68, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(201, 99, 68, 0.1) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
