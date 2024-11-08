import { css } from '~root/styled-system/css'

export default {
  root: css({
    w: 'calc(50% - 6px)',
    h: 100,
    sm: {
      w: '33%'
    },
    md: {
      h: 150
    },
    lg: {
      w: '35%',
      h: 150
    },
    xl: {
      w: '25%'
    },
    pos: 'relative',
    color: 'white',
    borderRadius: 4,
    '& img': {
      objectFit: 'cover',
      borderRadius: 4
    }
  }),
  background: css({
    pos: 'absolute',
    top: 0,
    left: 0,
    w: '100%',
    h: '100%',
    p: 8,
    borderRadius: 4,
    zIndex: 'docked',
    background: { base: 'black/20', _hover: 'black/30' },
    '& h3': {
      fontSize: 'sm',
      fontWeight: 'semibold',
      lg: {
        fontSize: 'lg',
        fontWeight: 'bold'
      }
    }
  })
}
