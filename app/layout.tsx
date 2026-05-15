import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream:         '#f2ede4',
        'cream-green': '#eaebe5',
        'sage-light':  '#d9dcd9',
        sage:          '#bfc9c3',
        'sage-mid':    '#89a08e',
        forest:        '#567268',
        moss:          '#2f3d34',
        deep:          '#232c26',
        ink:           '#1b221d',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono:  ['var(--font-mono)', 'Courier New', 'monospace'],
        sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
