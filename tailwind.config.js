/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        grey: {
          0: '#fff',
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        red: {
          100: '#fee2e2',
          700: '#b91c1c',
          800: '#991b1b',
        },
        green: {
          100: '#dcfce7',
          700: '#15803d',
        },
        yellow: {
          100: '#fef9c3',
          700: '#a16207',
        },
        silver: {
          100: '#f3f4f6',
          700: '#374151',
        },
        blue: {
          100: '#dbeafe',
          700: '#1d4ed8',
        },
      },
      borderRadius: {
        sm: '0.4rem',
        md: '0.6rem',
        lg: '1.2rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Sono', 'monospace'],
      },
    },
  },
  plugins: [],
}
