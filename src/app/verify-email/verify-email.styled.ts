import { css } from "~root/styled-system/css";

export default {
  root: css({
    display: 'flex',
    flexDir: 'column',
    gap: 64,
    py: 64,
    px: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minH: 'calc(100vh - 60px)',
    maxH: 'calc(100vh - 60px)',
    bgColor: 'primary.300',
    md: {
      backgroundImage: 'url("/background.svg")',
      backgroundPosition: 'bottom',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '130vw',
      py: 48,
      bgColor: 'white'
    },
  }),
  container: css({
    display: 'flex',
    flexDir: 'column',
    maxW: 560,
    aspectRatio: '4/3',
    w: '100%',
    gap: 32,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    mx: 'auto',
    bg: 'white/95',
    blur: 'md',
    rounded: 4,
    px: 28,
    py: 12,
    md: {
      px: 48,
      py: 32
    }
  }),
  title: css({
    textStyle: 'header.xl',
    fontWeight: 'semibold',
    mb: 8
  }),
  successBox: css({
    display: 'flex',
    flexDir: 'column',
    gap: 24,
    alignItems: 'center'
  })
}