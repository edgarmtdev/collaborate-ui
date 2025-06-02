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
    blur: 10,
    p: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 8
  }),
  title: css({ fontSize: 'md', fontWeight: 'semibold' }),
  content: css({ flexGrow: 1, p: 14 }),
  footer: css({ marginTop: '16px', textAlign: 'right' })
}
