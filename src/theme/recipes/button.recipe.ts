import { defineRecipe } from '@pandacss/dev'

export const button = defineRecipe({
  className: 'button',
  description: 'The styles for Button Component',
  base: {
    borderRadius: 4,
    fontWeight: 'semibold',
    cursor: 'pointer',
    boxShadow: 'sm',
    _hover: {
      opacity: 0.8
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    px: 16,
    transition: 'all',
    transitionDuration: '300ms',
    _disabled: {
      opacity: 0.7,
      cursor: 'progress',
      _hover: {
        opacity: 0.7
      }
    },
    '& .button-loader': {
      animation: 'spin 1s infinite linear'
    }
  },
  variants: {
    variant: {
      primary: {
        bg: 'secondary.950',
        color: 'white'
      },
      secondary: {
        backgroundColor: 'coolGray.700',
        color: 'white'
      },
      monocrom: {
        bg: 'white',
        color: 'heading',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'coolGray.500'
      },
      black: {
        bg: 'black',
        color: 'white'
      },
      danger: {
        bg: 'cardinal.600',
        color: 'white',
        _hover: {
          bg: 'cardinal.700'
        }
      },
      dangerBorder: {
        bg: 'cardinal.10',
        color: 'cardinal.900',
        border: 1,
        borderStyle: 'solid',
        borderColor: 'cardinal.900',
        _hover: {
          opacity: 0.8
        }
      }
    },
    size: {
      xs: {
        fontSize: 'xs',
        height: 24
      },
      sm: {
        fontSize: 'sm',
        height: 28
      },
      md: {
        fontSize: 'md',
        height: 36
      },
      lg: {
        fontSize: 'lg',
        height: 40
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
