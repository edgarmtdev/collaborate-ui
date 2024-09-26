import { definePreset } from '@pandacss/dev'
import { tokens } from './tokens'
import { breakpoints } from './breakpoints'
import { textStyles } from './text-style'

export const theme = definePreset({
  name: 'Theme preset',
  theme: {
    breakpoints,
    tokens,
    textStyles
  }
})