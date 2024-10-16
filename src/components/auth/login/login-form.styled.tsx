import { css } from '~root/styled-system/css'

export default {
  root: css({
    maxWidth: '520px',
    mx: 'auto',
    bg: 'white/80',
    py: 64,
    px: 32,
    rounded: 4
  }),
  form: css({
    display: 'grid',
    gap: 34,
    '& h2': {
      fontSize: '4xl',
      fontWeight: 'bold'
    }
  }),
  label: css({
    color: 'coolGray.800',
    fontWeight: 'medium'
  })

}