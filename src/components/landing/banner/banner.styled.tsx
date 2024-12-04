import { css } from '~root/styled-system/css'

export default {
  container: css({
    maxWidth: 'breakpoint-2xl',
    mx: 'auto',
    display: 'flex',
    gap: 24,
    py: 64
  }),

  paragraph: css({
    display: 'flex',
    flexDir: 'column',
    gap: 24,
    textAlign: 'end',
    w: '100%',
    '& h2': {
      fontSize: '4xl',
      fontWeight: 'extraBold',
      color: 'heading'
    },
    '& p': {
      fontSize: 'xl',
      color: 'text'
    }
  }),

  figure: css({
    pos: 'relative',
    w: '110%',
    aspectRatio: 'mockMac',
    rounded: 10,
    filter: 'dropShadow(5px 5px 10px #000000)',
    shadow: 'sm',
    '& img': {
      objectFit: 'cover',
      rounded: 10,
      objectPosition: 'top'
    }
  })
}
