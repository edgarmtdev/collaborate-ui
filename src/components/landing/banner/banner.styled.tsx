import { css } from '~root/styled-system/css'

export default {
  container: css({
    display: 'flex',
    gap: 64,
    py: 64
  }),

  paragraph: css({
    display: 'flex',
    flexDir: 'column',
    gap: 32,
    textAlign: 'end',
    w: '100%',
    '& h2': {
      fontSize: '3xl',
      fontWeight: 'bold',
      color: 'heading'
    },
    '& p': {
      fontSize: 'xl',
      color: 'text'
    }
  }),

  figure: css({
    pos: 'relative',
    w: '3/4',
    aspectRatio: 'square',
    filter: 'dropShadow(5px 5px 10px #000000)'
  })
}
