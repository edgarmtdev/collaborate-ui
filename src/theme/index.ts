import { type Theme } from '@pandacss/types'
import { breakpoints } from './breakpoints'
import { recipes } from './recipes'
import { slotRecipes } from './slot-recipes'
import { semanticTokens } from './semantic-tokens'
import { textStyles } from './text-style'
import { tokens } from './tokens'

export const theme: Theme = {
  breakpoints,
  tokens,
  textStyles,
  recipes,
  slotRecipes,
  semanticTokens
}