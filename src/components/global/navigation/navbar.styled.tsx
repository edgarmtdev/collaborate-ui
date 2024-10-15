import { css } from '~root/styled-system/css'

export default {
  navbar: css({
    p: 12,
    borderBottomStyle: 'solid',
    borderBottomColor: 'coolGray.200',
    borderBottom: '1px'
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
    ml: 'auto'
  })
}