import { css } from '~root/styled-system/css'

export default {
  headerRoot: css({
    p: 12,
    borderBottomStyle: 'solid',
    borderBottomColor: 'coolGray.200',
    borderBottom: '1px',
    color: 'coolGray.900',
    display: 'flex',
    alignItems: 'center',
    pos: 'fixed',
    top: 0,
    w: '100%',
    bg: 'white',
    zIndex: 'dropdown',
    md: {
      px: 16
    }
  }),
  iconSection: css({
    display: 'flex',
    gap: 12
  }),
  navigation: css({
    ml: 'auto',
    fontWeight: 'bold',
    display: 'flex',
    gap: 18,
    alignItems: 'center',
    lg: {
      gap: 36
    }
  }),
  listNav: css({
    display: 'none',
    gap: 18,
    alignItems: 'center',
    sm: {
      display: 'flex'
    },
    lg: {
      gap: 36
    }
  }),
  userAvatar: css({
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    '& p': {
      display: 'none',
      lg: { display: 'block' }
    }
  })
}
