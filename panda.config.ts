import { defineConfig } from '@pandacss/dev'
import { theme } from '@/styles/theme'

export default defineConfig({
  preflight: true,
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  exclude: [],
  presets: [],
  theme,
  outdir: 'styled-system',
  jsxFramework: 'react'
})
