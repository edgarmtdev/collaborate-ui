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
  noAccount: css({
    color: 'coolGray.800',
    fontWeight: 'medium',
    textAlign: 'center'
  })
}
