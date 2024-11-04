import { defineRecipe } from '@pandacss/dev'

export const alert = defineRecipe({
  className: 'Alert',
  description: 'The styles for Alert component',
  base: {
    fontWeight: 'semibold',
    w: '100%',
    border: 1,
    borderStyle: 'solid',
    rounded: 4,
    px: 12,
    py: 5
  },
  variants: {
    status: {
      info: {
        color: 'secondary.950',
        bg: 'secondary.25',
        borderColor: 'secondary.200'
      },
      warning: {
        color: 'orangered/80',
        bg: 'orangered/10',
        borderColor: 'orangered/50'
      },
      success: {
        color: 'primary.950',
        bg: 'primary.25',
        borderColor: 'primary.200'
      },
      error: {
        color: 'error',
        bg: 'cardinal.25',
        borderColor: 'cardinal.200'
      },
      neutral: {
        color: 'coolGray.950',
        bg: 'coolGray.25',
        borderColor: 'coolGray.200'
      }
    },
    size: {
      sm: {
        fontSize: 'sm'

      },
      md: {
        fontSize: 'md'
      },
      lg: {
        fontSize: 'lg'
      }
    }
  },
  defaultVariants: {
    status: 'neutral',
    size: 'md'
  }
})