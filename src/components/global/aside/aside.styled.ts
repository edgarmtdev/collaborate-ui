import { css } from '~root/styled-system/css'

export default {
  asideRoot: css({
    bg: 'coolGray.25/30',
    borderRight: '1px',
    borderRightStyle: 'solid',
    borderColor: 'coolGray.200',
    minH: '100vh',
    display: 'none',
    lg: {
      display: 'block'
    }
  }),
  container: css({
    pos: 'relative',
    zIndex: 'docked',
    w: 300,
    p: 8,
    h: '100%'
  }),
  panelWrapper: css({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    w: '100%',
    minH: '100%',
    mt: 48
  }),
  panelNav: css({
    h: '100%',
    p: 12,
    color: 'heading'
  }),
  menuCollapContent: css({})
}
