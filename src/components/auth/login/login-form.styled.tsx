import { css } from '~root/styled-system/css'

export default {
  form: css({
    display: 'grid',
    gap: 28,
    py: 24,
    borderBottom: 1,
    borderBottomStyle: 'solid',
    borderColor: 'coolGray.200',
    '& h2': {
      fontSize: '4xl',
      fontWeight: 'extraBold'
    },
    md: {
      gap: 32
    },
    '& label': {
      fontWeight: 'medium'
    }
  }),
  noAccount: css({
    color: 'coolGray.800',
    fontWeight: 'medium',
    textAlign: 'center',
    '& a': {
      color: 'primary.800',
      _hover: { textDecoration: 'underline' }
    }
  }),
  showPassCheckbox: css({
    pt: 10,
    display: 'flex',
    gap: 4,
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    '& input': {
      accentColor: 'secondary.950',
      w: 16,
      h: 16
    },
    '& label': {
      cursor: 'default'
    }
  }),
  forgotPassword: css({
    color: 'coolGray.800',
    w: 'max-content',
    mx: 'auto',
    _hover: { textDecoration: 'underline' }
  }),
  error: css({
    color: 'error',
    px: 12,
    py: 5,
    bg: 'cardinal.25',
    border: 1,
    borderColor: 'cardinal.200',
    borderStyle: 'solid',
    rounded: 4,
    fontSize: 'sm'
  })
}
