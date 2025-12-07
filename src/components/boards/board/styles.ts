import { css } from '~root/styled-system/css'

export default {
  board: css({
    backgroundColor: 'white',
    width: 272,
    borderRadius: 10,
    boxShadow: 'md'
  }),
  header: css({
    backgroundColor: 'primary.700',
    color: 'white',
    backdropFilter: 'blur(10px)',
    p: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 8
  }),
  title: css({
    fontSize: 'md',
    fontWeight: 'semibold'
  }),
  content: css({
    flexGrow: 1,
    p: 14
  }),
  noTasksMessage: css({
    color: 'coolGray.500'
  }),
  taskItem: css({
    marginBottom: '16px',
    padding: '8px',
    borderRadius: '8px'
  }),
  taskItemPending: css({
    bgColor: 'coolGray.25',
    opacity: 0.7
  }),
  taskItemConfirmed: css({
    bgColor: 'coolGray.50'
  }),
  formContainer: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '8px'
  }),
  formButtonsContainer: css({
    display: 'flex',
    flexDirection: 'row',
    gap: '8px'
  }),
  footer: css({
    marginTop: '16px',
    textAlign: 'right'
  })
}
