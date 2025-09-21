import { css } from '~root/styled-system/css'

export default {
  dialogTrigger: css({
    w: 'calc(50% - 6px)',
    h: 100,
    border: '1px dashed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    sm: {
      w: '33%'
    },
    md: {
      h: 150
    },
    lg: {
      w: '33%',
      h: 150
    },
    xl: {
      w: '18%',
      h: 150
    },
    pos: 'relative',
    borderRadius: 4,
    '& img': {
      objectFit: 'cover',
      borderRadius: 4
    },
    '&:hover': {
      backgroundColor: 'coolGray.25'
    },
    cursor: 'pointer',
    transition: 'background-color 100ms ease-in'
  }),
  overlay: css({
    pos: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 'overlay'
  }),
  modalContent: css({
    pos: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '500px',
    backgroundColor: 'white',
    opacity: 1,
    borderRadius: '8px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    zIndex: 'modal',
    pointerEvents: 'auto'
  }),
  title: css({
    fontWeight: 700,
    fontSize: '22px'
  }),
  formContainer: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  })
}
