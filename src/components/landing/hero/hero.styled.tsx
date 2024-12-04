import { css } from '~root/styled-system/css'

export const classes = {
  hero: css({
    display: 'flex',
    flexDir: 'column',
    gap: 48,
    py: 64,
    px: 24,
    alignItems: 'center',
    backgroundImage: 'url("/background.svg")',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    zoom: '120%',
    lg: {
      py: 48
    }
  }),

  h1: css({
    fontSize: '2xl',
    fontWeight: 'extraBold',
    textAlign: 'center',
    color: 'white',
    md: {
      fontSize: '5xl'
    }
  }),

  figure: css({
    pos: 'relative',
    w: '100%',
    aspectRatio: 'landscape',
    filter: 'dropShadow(5px 5px 10px #000000)',
    lg: {
      w: '1/3'
    }
  })
}
