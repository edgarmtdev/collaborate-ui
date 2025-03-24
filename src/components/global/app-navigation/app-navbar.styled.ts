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
    p: 4,
    minWidth: 220,
    bg: 'white',
    border: '1px',
    borderColor: 'coolGray.25',
    borderStyle: 'solid',
    rounded: 4,
    shadow: 'xl',
    zIndex: 'dropdown'
  }),
  dropdownItem: css({
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    py: 10,
    px: 16,
    color: 'coolGray.900',
    fontWeight: 'bold',
    fontSize: 'sm',
    cursor: 'pointer',
    '&:hover': {
      bg: 'secondary.50'
    },
    rounded: 4

  })
}
