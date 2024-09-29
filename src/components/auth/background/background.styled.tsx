import { css } from '~root/styled-system/css'

export default {
  figure: css({
    position: 'fixed',
    width: '100vw',
    height: '100vh'
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