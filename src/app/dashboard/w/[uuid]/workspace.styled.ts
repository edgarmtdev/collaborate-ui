import { css } from '~root/styled-system/css'

export default {
  backgroundContainer: css({
    width: '100vw',
    minHeight: '100vh',
    position: 'fixed',
    top: 0
  }),
  backgroundImage: css({
    objectFit: 'cover'
  }),
  backgroundOverlay: css({
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: 'black/50',
    position: 'absolute'
  }),
  pageContainer: css({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    w: '100%',
    height: '100%',
    mt: 62
  }),
  boardsContainer: css({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'auto'
  }),
  boardsList: css({
    position: 'relative',
    p: 32,
    height: '100%',
    display: 'flex',
    flexDirection: 'row'
  }),
  boardCard: css({
    display: 'block',
    alignSelf: 'flex-start',
    height: '100%',
    whiteSpace: 'nowrap',
    paddingX: 10
  }),
}
