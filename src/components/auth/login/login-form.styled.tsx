import { css } from '~root/styled-system/css'

export default {
  root: css({
    maxWidth: '520px',
    mx: 'auto',
    bg: 'coolGray.200/90',
    py: 64,
    px: 32,
    rounded: 10
  }),
  form: css({
    display: 'grid',
    gap: 34,
    '& h2': {
      fontSize: '4xl',
      fontWeight: 'extraBold'
    }
  }),
  label: css({
    color: 'coolGray.600',
    fontWeight: 'medium'
  })

}