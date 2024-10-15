import { css } from '~root/styled-system/css'

export default {
  navbar: css({
    p: 12,
    shadow: 'md',
    bgColor: 'primary.950',
    color: 'white'
  }),
  container: css({
    maxWidth: 'breakpoint-2xl',
    mx: 'auto',
    display: 'grid',
    gridTemplateColumns: '2',
    alignItems: 'center'
  }),
  appLabel: css({
    textStyle: 'header.lg',
    fontWeight: 700
  }),
  sessionOptions: css({
    ml: 'auto'
  })
}