import { css } from '~root/styled-system/css'

export default {
  root: css({
    pos: 'relative',
    w: 300,
    h: 200,
    color: 'white',
    fontWeight: 'semibold',
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
    '& h2': {
      fontStyle: 'xl',
      fontWeight: 'bold'
    }
  })
}