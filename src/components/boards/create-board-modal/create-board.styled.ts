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
    _hover: {
      borderColor: 'coolGray.100',
      color: 'coolGray.600',
      backgroundColor: 'coolGray.50'
    }
  }),

}