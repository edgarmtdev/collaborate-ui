import { css } from '~root/styled-system/css'

export default {
  navbar: css({
    p: 12,
    color: 'coolGray.900',
    shadow: 'md'
  }),
  container: css({
    maxWidth: 'breakpoint-2xl',
    mx: 'auto',
    display: 'flex',
    alignItems: 'center'
  }),
  appLabel: css({
    textStyle: 'header.lg',
    fontWeight: 700
  }),
  sessionOptions: css({
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    ml: 'auto',
    fontWeight: 'bold',
    md: {
      gap: 24
    }
  })
}
