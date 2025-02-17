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
    gap: 32,
    '& button': {
      color: 'heading',
      fontWeight: 'semibold',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      lg: {
        display: 'none'
      }
    }
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
  }),
  userButton: css({
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    color: 'heading',
    fontWeight: 'bold',
    cursor: 'pointer',
    '& p': {
      display: 'none',
      lg: { display: 'block' }
    }
  }),
  dropdownContent: css({
    minWidth: 200,
    py: 12,
    px: 16,
    bg: 'white',
    border: '1px',
    borderColor: 'coolGray.200',
    rounded: 8,
    shadow: 'md',
    zIndex: 'dropdown'
  }),
  dropdownItem: css({
    py: 8,
    px: 6,
    color: 'coolGray.900',
    fontWeight: 'bold',
    cursor: 'pointer'
  })
}
