import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  header: {
    xl: { value: { fontSize: '1.5rem', lineHeight: '2rem' } },
    lg: { value: { fontSize: '1.25rem', lineHeight: '1.75rem' } },
    md: { value: { fontSize: '1.125rem', lineHeight: '1.75rem' } }
  },
  text: {
    1: { value: { fontSize: '1rem', lineHeight: '1.5rem' } },
    2: { value: { fontSize: '0.875rem', lineHeight: '1.25rem' } },
    3: { value: { fontSize: '0.75rem', lineHeight: '1rem' } }
  }
})