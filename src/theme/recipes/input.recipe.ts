import { defineRecipe } from '@pandacss/dev'

export const input = defineRecipe({
  className: 'input',
  description: 'The styles for the Input Component',
  base: {
    borderStyle: 'solid',
    borderColor: 'coolGray.500',
    border: 1,
    backgroundColor: 'white',
    borderRadius: 4,
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
        bg: 'white'
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