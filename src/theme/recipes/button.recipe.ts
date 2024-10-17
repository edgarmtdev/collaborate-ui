import { defineRecipe } from '@pandacss/dev'

export const button = defineRecipe({
  className: 'button',
  description: 'The styles for Button Component',
  base: {
    borderRadius: 4,
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: 'sm',
    _hover: {
      opacity: 0.9
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    px: 16,
    transition: 'all',
    transitionDuration: '300ms'
  },
  variants: {
    variant: {
      primary: {
        bg: 'secondary.950',
        color: 'white'
      },
      monocrom: {
        bg: 'white',
        color: 'neutral',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'coolGray.500'
      },
      black: {
        bg: 'black',
        color: 'white'
      }
    },
    size: {
      sm: {
        fontSize: 'sm',
        py: 3
      },
      md: {
        fontSize: 'md',
        py: 6
      },
      lg: {
        fontSize: 'lg',
        py: 6
      }
    },
    width: {
      full: {
        w: '100%'
      }
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})