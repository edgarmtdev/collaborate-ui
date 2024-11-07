import { defineRecipe } from '@pandacss/dev'

export const icon = defineRecipe({
  className: 'svg-icon',
  description: 'Styles for SVG icon',
  variants: {
    size: {
      sm: {
        w: 18,
        h: 18
      },
      md: {
        w: 24,
        h: 24
      },
      lg: {
        w: 32,
        h: 32
      }
    },
    color: {
      neutral: {
        fill: 'neutral'
      },
      white: {
        fill: 'white'
      },
      black: {
        fill: 'black'
      }
    }
  },
  defaultVariants: {
    color: 'white',
    size: 'md'
  }
})
