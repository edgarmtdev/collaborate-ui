import { css } from '~root/styled-system/css'

export default {
  taskItem: css({
    marginBottom: '16px',
    padding: '8px',
    borderRadius: '8px',
    cursor: 'grab'
  }),
  taskItemPending: css({
    bgColor: 'coolGray.25',
    opacity: 0.7
  }),
  taskItemConfirmed: css({
    bgColor: 'coolGray.50'
  }),
  taskItemDragging: css({
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'grabbing'
  })
}
