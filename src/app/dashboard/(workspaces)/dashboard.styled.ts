import { css } from '~root/styled-system/css'

export const layoutStyled = css({
  display:
  'flex',
  flexDir: 'row',
  flex: '1 1 0%',
  mt: 61
})

export const workspacesPage = {
  root: css({
    p: 12,
    w: '100%',
    '& h2': {
      fontSize: '3xl',
      fontWeight: 'bold',
      color: 'heading'
    },
    lg: {
      px: 64,
      py: 36
    }
  }),
  separator: css({
    my: 48,
    color: 'text',
    borderBottom: 1,
    borderBottomStyle: 'solid',
    borderColor: 'coolGray.200'
  }),
  flexSection: css({
    display: 'flex',
    flexWrap: 'wrap',
    gridTemplateColumns: 5,
    gap: 12,
    w: '100%',
    lg: {
      gap: 24
    }
  })
}