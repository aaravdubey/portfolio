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
  },
  plugins: [
    require('@codaworks/react-glow/tailwind')
  ]
} satisfies Config

export default config