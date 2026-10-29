/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0B1720',
          900: '#102330',
          800: '#17364A', // Primary Deep industrial navy
          700: '#1D455E',
          600: '#26597B',
          500: '#3477A1',
          100: '#E2EAF0',
          50: '#F2F6F9',
        },
        accent: {
          700: '#C95415',
          600: '#DF661E',
          500: '#F47A32', // Primary Orange accent
          400: '#FA9456',
          100: '#FDEAE0',
          50: '#FFF7F2',
        },
        industrial: {
          dark: '#20313B',   // Dark text
          muted: '#65737D',  // Muted text
          light: '#F4F6F8',  // Light neutral background
          border: '#E2E8ED', // Crisp border line
          surface: '#FFFFFF',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(23, 54, 74, 0.06), 0 1px 2px rgba(23, 54, 74, 0.04)',
        'card': '0 4px 6px -1px rgba(23, 54, 74, 0.07), 0 2px 4px -2px rgba(23, 54, 74, 0.05)',
        'elevated': '0 10px 25px -3px rgba(23, 54, 74, 0.12), 0 4px 8px -4px rgba(23, 54, 74, 0.08)',
      }
    },
  },
  plugins: [],
}

