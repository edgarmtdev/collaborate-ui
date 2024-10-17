import { defineRecipe } from '@pandacss/dev'

export const input = defineRecipe({
  className: 'input',
  description: 'The styles for the Input Component',
  base: {
    border: 1,
    borderRadius: 4,
    borderStyle: 'solid',
    fontWeight: 'medium',
    px: 8,
    _focus: {
      outline: 'none'
    },
    _placeholder: {
      color: 'coolGray.200'
    }
  },
  variants: {
    color: {
      main: {
        borderColor: 'coolGray.500',
        backgroundColor: 'white',
        bg: 'white'
      },
      error: {
        borderStyle: 'solid',
        borderColor: 'error',
        backgroundColor: 'white'
      }
    },
    size: {
      sm: {
        fontSize: 'sm',
        py: 3
      },
      md: {
        fontSize: 'md',
        py: 5
      },
      lg: {
        fontSize: 'lg',
        py: 5
      }
    },
    width: {
      full: {
        w: '100%'
      },
      max: {
        w: 'max-content'
      }
    }
  },
  defaultVariants: {
    color: 'main',
    size: 'md',
    width: 'full'
  }
})