import { defineSemanticTokens } from '@pandacss/dev'

export const colors = defineSemanticTokens.colors({
  neutral: { value: '{colors.coolGray.950}' },
  error: { value: '{colors.cardinal.950}' }
})