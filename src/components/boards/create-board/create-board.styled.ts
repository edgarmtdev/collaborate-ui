import { css } from "~root/styled-system/css";

export default {
  createBoardContainer: css({
    minW: 272,
  }),
  addBoardButton: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    w: 272,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'coolGray.100/60',
    backdropFilter: 'blur(4px)',
    color: 'coolGray.950',
    cursor: 'pointer',
    fontWeight: '500',
    fontSize: 'sm',
    _hover: {
      borderColor: 'coolGray.100',
      color: 'coolGray.600',
      backgroundColor: 'coolGray.50'
    }
  }),
  formContainer: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    bgColor: 'white',
    borderRadius: 10,
    boxShadow: 'md',
    p: 10,
  }),
  formButtonsContainer: css({
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  }),
}