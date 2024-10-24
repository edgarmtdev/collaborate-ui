import { css } from '~root/styled-system/css'

export default {
  headerRoot: css({
    px: 16,
    py: 12,
    borderBottomStyle: 'solid',
    borderBottomColor: 'coolGray.200',
    borderBottom: '1px',
    color: 'coolGray.900',
    display: 'flex',
    alignItems: 'center'
  }),
  navigation: css({
    ml: 'auto',
    fontWeight: 'bold'
  }),
  listNav: css({ display: 'flex', gap: 36, alignItems: 'center' }),
  userAvatar: css({ display: 'flex', gap: 8, alignItems: 'center' })
}