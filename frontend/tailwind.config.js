/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Main color palette
        'dark-navy': '#26425A',
        'dusty-rose': '#C38EB4',
        'pale-pink': '#E1CBD7',
        'periwinkle': '#86A8CF',
        'deep-teal': '#26425A',
        
        // Space theme variations
        'space-dark': '#0B1426',
        'space-blue': '#1A2332',
        'space-light': '#2A3441',
        
        // Legacy colors for compatibility
        'navy': '#26425A',
        'mauve': '#C38EB4',
        'pale-pink': '#E1CBD7',
        'periwinkle': '#86A8CF',
        'teal': '#26425A',
        
        primary: {
          50: '#f0f4f7',
          100: '#dae6ec',
          200: '#b8cdd9',
          300: '#91adc0',
          400: '#6b8ba5',
          500: '#26425A',
          600: '#213a4e',
          700: '#1c3142',
          800: '#172837',
          900: '#13202c',
        },
        secondary: {
          50: '#faf8fb',
          100: '#f4f0f6',
          200: '#e7dde8',
          300: '#d9c8db',
          400: '#C38EB4',
          500: '#b37ba6',
          600: '#9f6d98',
          700: '#8b5f8a',
          800: '#77517c',
          900: '#63436e',
        },
        accent: {
          50: '#f9fafb',
          100: '#f2f5f7',
          200: '#e3eaef',
          300: '#d4dfe7',
          400: '#86A8CF',
          500: '#7299c4',
          600: '#5e8ab9',
          700: '#4a7bae',
          800: '#366ca3',
          900: '#225d98',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(134, 168, 207, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(134, 168, 207, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};