import { defineRecipe } from '@pandacss/dev'

export const input = defineRecipe({
  className: 'input',
  description: 'The styles for the Input Component',
  base: {
    borderStyle: 'solid',
    borderColor: 'coolGray.500',
    border: 1,
    backgroundColor: 'white'
  },
  variants: {
    color: {
      main: {
        bg: 'white'
      }
    },
    size: {
      sm: {
        fontSize: 'sm',
        px: 8,
        py: 4
      },
      md: {
        fontSize: 'md',
        px: 8,
        py: 10
      },
      lg: {

      }
    }
  },
  defaultVariants: {
    color: 'main',
    size: 'sm'
  }
})