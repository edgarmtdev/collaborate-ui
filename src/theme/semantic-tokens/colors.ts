import { defineSemanticTokens } from '@pandacss/dev'

export const colors = defineSemanticTokens.colors({
  neutral: { value: '{colors.coolGray.950}' },
  heading: { value: '{colors.coolGray.800}' },
  text: { value: '{colors.coolGray.600}' },
  success: { value: '{colors.primary.950}' },
  error: { value: '{colors.cardinal.950}' }
})
