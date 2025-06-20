import { cva } from '~root/styled-system/css'

export const avatar = cva({
  base: {
    color: 'white',
    display: 'grid',
    placeItems: 'center',
    fontWeight: 'bold',
    userSelect: 'none',
    pos: 'relative',
    '& img': {
      objectFit: 'cover',
      objectPosition: 'center'
    }
  },
  variants: {
    size: {
      xs: {
        w: 28,
        h: 28,
        fontSize: 'xs'
      },
      sm: {
        w: 32,
        h: 32,
        fontSize: 'xs'
      },
      md: {
        w: 40,
        h: 40,
        fontSize: 'md'
      },
      lg: {
        w: 48,
        h: 48,
        fontSize: 'lg'
      },
      xl: {
        w: 64,
        h: 64,
        fontSize: 'xl'
      },
      '2xl': {
        w: 80,
        h: 80,
        fontSize: '2xl'
      },
      '3xl': {
        w: 96,
        h: 96,
        fontSize: '3xl'
      },
      '4xl': {
        w: 128,
        h: 128,
        fontSize: '4xl'
      }
    },
    radius: {
      none: {
        borderRadius: 0,
        '& img': {
          borderRadius: 0
        }
      },
      base: {
        borderRadius: 4,
        '& img': {
          borderRadius: 4
        }
      },
      full: {
        borderRadius: '999',
        '& img': {
          borderRadius: '999'
        }
      }
    }
  },
  defaultVariants: {
    size: 'md',
    radius: 'base'
  }
})
