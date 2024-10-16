import { defineRecipe } from '@pandacss/dev'

export const button = defineRecipe({
  className: 'button',
  description: 'The styles for Button Component',
  base: {
    borderRadius: 4,
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: 'xs',
    _hover: {
      opacity: 0.9
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    px: 8,
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
        color: 'coolGray.950',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'coolGray.500'
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
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})