import { defineSemanticTokens } from '@pandacss/dev'

export const colors = defineSemanticTokens.colors({
  neutral: { value: '{colors.coolGray.950}' },
  heading: { value: '{colors.coolGray.800}' },
  text: { value: '{colors.coolGray.600}' },
  error: { value: '{colors.cardinal.950}' }
})