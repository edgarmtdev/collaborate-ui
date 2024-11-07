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
  })
}
