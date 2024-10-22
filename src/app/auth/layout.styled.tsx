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
    alignItems: '',
    minHeight: 'calc(100vh - 80px)',
    px: 12,
    pb: 64,
    pt: 80,
    lg: {
      display: 'grid',
      gridTemplateColumns: 2
    }
  }),
  labelSection: css({
    display: 'none',
    mt: 120,
    ml: 48,
    lg: {
      display: 'flex',
      alignItems: 'start',
      color: 'white',
      '& h2': {
        fontSize: '3xl',
        fontWeight: 'extraBold',
        color: 'white'
      }
    }
  }),
  formContainer: css({
    maxW: 500,
    mx: 'auto',
    bg: 'white/90',
    rounded: 4,
    px: 32,
    py: 18,
    md: {
      px: 48,
      py: 32
    }
  })
}
