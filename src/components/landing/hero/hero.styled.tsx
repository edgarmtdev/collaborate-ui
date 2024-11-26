import { css } from '~root/styled-system/css'

export const classes = {
  hero: css({
    display: 'flex',
    flexDir: 'column',
    gap: 48,
    alignItems: 'center'
  }),

  h1: css({
    fontSize: '3xl',
    fontWeight: 'extraBold',
    textAlign: 'center',
    color: 'neutral',
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
      w: '1/2'
    }
  })
}
