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
  }),
  buttonContainer: css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16,
    alignItems: 'center'
  }),
  errorMessage: css({
    color: 'cardinal.600',
    minH: 20
  })
}
