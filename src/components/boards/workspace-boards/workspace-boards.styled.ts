import { css } from '~root/styled-system/css'

export default {
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
  })
}
