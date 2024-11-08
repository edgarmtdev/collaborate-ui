import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  header: {
    xl: { value: { fontSize: '2xl', lineHeight: '2rem' } },
    lg: { value: { fontSize: 'xl', lineHeight: '1.75rem' } },
    md: { value: { fontSize: 'lg', lineHeight: '1.75rem' } }
  },
  text: {
    sm: { value: { fontSize: 'sm', lineHeight: '1.5rem' } },
    md: { value: { fontSize: 'md', lineHeight: '1.25rem' } },
    lg: { value: { fontSize: 'lg', lineHeight: '1rem' } }
  }
})
