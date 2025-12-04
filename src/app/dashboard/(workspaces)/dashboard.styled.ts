import { css } from '~root/styled-system/css'

export const layoutStyled = css({
  display: 'flex',
  flexDir: 'row',
  flex: '1 1 0%',
  mt: 61,
  minH: '100vh'
})

export const dashboardStyled = {
  root: css({
    p: 12,
    position: 'relative',
    w: '100%',
    lg: {
      w: 'calc(100% - 300px)',
      left: 300,
      px: 72,
      py: 36
    }
  }),
  header: css({
    display: 'grid',
    gridTemplateRows: 3,
    alignItems: 'center',
    '& h2': {
      fontSize: '3xl',
      fontWeight: 'bold',
      color: 'heading'
    },
    md: {
      gridTemplateColumns: 3
    }
  }),
  dashboardContent: css({
    display: 'grid',
    gap: 32
  })
}
