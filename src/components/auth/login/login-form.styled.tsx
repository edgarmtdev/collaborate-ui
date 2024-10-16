import { css } from '~root/styled-system/css'

export default {
  form: css({
    display: 'grid',
    gap: 34,
    py: 34,
    borderBottom: 1,
    borderBottomStyle: 'solid',
    borderColor: 'coolGray.200',
    '& h2': {
      fontSize: '4xl',
      fontWeight: 'extraBold'
    }
  }),
  label: css({
    color: 'coolGray.800',
    fontWeight: 'medium'
  })
}
