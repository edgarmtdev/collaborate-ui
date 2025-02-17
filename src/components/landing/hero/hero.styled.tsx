import { css } from '~root/styled-system/css'

export const classes = {
  hero: css({
    display: 'flex',
    flexDir: 'column',
    gap: 48,
    py: 64,
    px: 12,
    alignItems: 'center',
    md: {
      backgroundImage: 'url("/background.svg")',
      backgroundPosition: 'bottom',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '130vw',
      py: 48
    }
  }),

  h1: css({
    fontSize: '3xl',
    fontWeight: 'extraBold',
    textAlign: 'center',
    md: {
      color: 'white',
      fontSize: '5xl'
    }
  }),

  figure: css({
    pos: 'relative',
    w: '100%',
    aspectRatio: '756 / 473',
    shadow: 'lg',
    filter: 'dropShadow(5px 5px 10px #000000)',
    rounded: 10,
    '& img': {
      objectFit: 'cover',
      rounded: 10
    },
    lg: {
      w: '1/2'
    }
  })
}
