import { cva } from '~root/styled-system/css'

export const avatar = cva({
  base: {
    borderRadius: '999',
    bg: 'secondary.950',
    color: 'white',
    w: 32,
    h: 32,
    display: 'grid',
    placeItems: 'center',
    fontSize: 'xs'
  },
  variants: {
    color: {},
    size: {}
  }
})