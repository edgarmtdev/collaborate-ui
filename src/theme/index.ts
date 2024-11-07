import { breakpoints } from './breakpoints'
import { recipes } from './recipes'
import { slotRecipes } from './slot-recipes'
import { semanticTokens } from './semantic-tokens'
import { textStyles } from './text-style'
import { tokens } from './tokens'
import { keyframes } from './keyframes'

import { type Theme } from '@pandacss/types'

export const theme: Theme = {
  breakpoints,
  tokens,
  textStyles,
  recipes,
  slotRecipes,
  semanticTokens,
  keyframes
}
