import { defineSlotRecipe } from '@pandacss/dev'

export const inputSlot = defineSlotRecipe({
  className: 'Input',
  description: 'The styles for Input Icon Component',
  slots: ['root', 'input'],
  base: {
    root: {}
  },
  variants: {
    variant: {
      variant: {
        root: {},
        input: {}
      }
    }
  }
})