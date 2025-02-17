import { css } from '~root/styled-system/css'

export default {
  container: css({
    maxWidth: 'breakpoint-2xl',
    mx: 'auto',
    display: 'flex',
    flexDir: 'column-reverse',
    gap: 24,
    py: 64,
    lg: {
      flexDir: 'row',
      gap: 48
    },
    px: 12
  }),

  paragraph: css({
    display: 'flex',
    flexDir: 'column',
    gap: 24,
    textAlign: 'start',
    w: '100%',
    '& h2': {
      fontSize: '2xl',
      fontWeight: 'extraBold',
      color: 'heading'
    },
    '& p': {
      fontSize: 'lg',
      color: 'text'
    },
    lg: {
      w: '90%',
      textAlign: 'end',
      '& h2': {
        fontSize: '4xl'
      },
      '& p': {
        fontSize: 'xl'
      }
    }
  }),

  figure: css({
    pos: 'relative',
    w: '100%',
    aspectRatio: 'mockMac',
    rounded: 10,
    filter: 'dropShadow(5px 5px 10px #000000)',
    shadow: 'sm',
    '& img': {
      objectFit: 'cover',
      rounded: 10,
      objectPosition: 'top'
    },
    lg: {
      w: '110%'
    }
  })
}
