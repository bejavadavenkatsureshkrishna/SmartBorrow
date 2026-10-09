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
        fintech: {
          bg: {
            light: '#FAF8F5',
            card: '#FFFFFF',
            subtle: '#F4EFEA',
            dark: '#111317',
            darkCard: '#181A20',
            darkSubtle: '#21242C',
          },
          ink: {
            DEFAULT: '#14171F',
            muted: '#5C6272',
            subtle: '#8C92A4',
            dark: '#F0EDE6',
            darkMuted: '#A0A6B5',
            darkSubtle: '#6B7280',
          },
          emerald: {
            50: '#F0FDF9',
            100: '#CCFBF1',
            500: '#14B8A6',
            600: '#0D9488',
            700: '#0F766E', // Primary accent
            800: '#115E59',
            900: '#134E48',
          },
          amber: {
            500: '#D97706',
            600: '#B45309',
          },
          rose: {
            500: '#E11D48',
            600: '#BE123C',
          },
          border: {
            light: '#E8E4DD',
            dark: '#272A34',
          }
        }
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(20, 23, 31, 0.04), 0 1px 2px -1px rgba(20, 23, 31, 0.04)',
        'elevated': '0 4px 20px -2px rgba(20, 23, 31, 0.06), 0 2px 6px -1px rgba(20, 23, 31, 0.04)',
        'floating': '0 12px 36px -4px rgba(20, 23, 31, 0.10), 0 4px 12px -2px rgba(20, 23, 31, 0.05)',
      }
    },
  },
  plugins: [],
}
