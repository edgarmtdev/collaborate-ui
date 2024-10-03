import { css } from '~root/styled-system/css'

export const headerStyles = css({
  p: 12,
  top: 0,
  position: 'absolute',
  zIndex: '50',
  color: 'white',
  textStyle: 'header.lg',
  fontWeight: 'bold',
  '& h1': {
    textTransform: 'uppercase'
  }
})

export const bodyStyles = {
  grid: css({
    position: 'absolute',
    width: '100%',
    display: 'grid',
    alignItems: 'center',
    lg: {
      display: 'grid',
      gridTemplateColumns: 2
    },
    minHeight: '100vh',
    p: 24
  }),
  labelSection: css({
    display: 'none',
    lg: {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      '& h2': {
        fontSize: '3xl',
        fontWeight: 'medium'
      }
    }
  })
}

export const footerStyles = css({
  position: 'absolute',
  width: '100%',
  p: 24,
  bottom: 0
})