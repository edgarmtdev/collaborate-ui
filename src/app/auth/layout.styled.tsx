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
    position: 'relative',
    width: '100%',
    display: 'grid',
    alignItems: 'center',
    minHeight: 'calc(100vh - 52px)',
    px: 12,
    py: 64,
    lg: {
      display: 'grid',
      gridTemplateColumns: 2
    }
  }),
  labelSection: css({
    display: 'none',
    lg: {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      '& h2': {
        fontSize: '3xl',
        fontWeight: 'extraBold',
        color: 'white'
      }
    }
  })
}

export const footerStyles = css({
  position: 'relative',
  zIndex: 'docked',
  p: 12,
  mt: 10,
  color: 'white',
  bottom: 0,
  display: 'grid',
  gridTemplateColumns: 3,
  fontSize: 'lg',
  fontWeight: 'semibold',
  '& section': {
    display: 'flex',
    fill: 'white',
    gap: 12
  },
  '& section:nth-child(2)': {
    justifyContent: 'center'
  },
  '& section:nth-child(3)': {
    justifyContent: 'end'
  }
})