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
      gap: 34
    },
    '& label': {
      fontWeight: 'medium'
    },
    '& .email-input': {
      mb: 64
    }
  }),
  backToLogin: css({
    color: 'coolGray.800',
    fontWeight: 'medium',
    textAlign: 'center',
    '& a': {
      color: 'primary.800',
      _hover: { textDecoration: 'underline' }
    }
  })
}
