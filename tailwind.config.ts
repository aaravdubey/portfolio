import type { Config } from "tailwindcss"

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  extend: {
    colors: {
      gray: "#09090b",
    },
    animation: {
      'pulse-shadow': 'pulse-shadow 2s infinite',
    },
    keyframes: {
      'pulse-shadow': {
        '0%': {
          boxShadow: '0 0 500px 300px rgba(30, 41, 59, 0.8)',
        },
        '50%': {
          boxShadow: '0 0 600px 400px rgba(30, 41, 59, 0.6)',
        },
        '100%': {
          boxShadow: '0 0 500px 300px rgba(30, 41, 59, 0.8)',
        },
      },
    },
  },
  plugins: [
    require('@codaworks/react-glow/tailwind')
  ]
} satisfies Config

export default config