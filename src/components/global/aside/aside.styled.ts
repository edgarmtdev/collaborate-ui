import { css } from '~root/styled-system/css'

export default {
  asideRoot: css({
    position: 'fixed',
    top: 61,
    left: 0,
    w: 320,
    height: 'calc(100vh - 61px)',
    bg: 'coolGray.25/30',
    borderRight: '1px',
    borderRightStyle: 'solid',
    borderColor: 'coolGray.200',
    p: 8,
    pt: 48
  })
}