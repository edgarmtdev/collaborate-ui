import { css } from '~root/styled-system/css'

export default {
  figure: css({
    position: 'fixed',
    minWidth: '100vw',
    minHeight: '100vh'
  }),
  image: css({
    objectFit: 'cover'
  }),
  bgOpacity: css({
    position: 'absolute',
    bg: 'black',
    width: '100%',
    height: '100%',
    zIndex: '20',
    opacity: '0.8',
    top: 0
  })
}