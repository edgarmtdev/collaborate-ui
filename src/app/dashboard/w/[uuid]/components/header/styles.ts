import { css } from '~root/styled-system/css'

export default {
  root: css({
    color: 'white',
    position: 'relative',
    backgroundColor: 'black/80',
    p: 16,
    fontSize: 'lg',
    fontWeight: 'semibold',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }),
  overlay: css({
    backgroundColor: 'black/50',
    pos: 'fixed',
    inset: 0
  }),
  contentModal: css({
    pos: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '500px',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  })
}
