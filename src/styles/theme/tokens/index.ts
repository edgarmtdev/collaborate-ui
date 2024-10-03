import { defineTokens } from '@pandacss/dev'
import { aspectRatios } from './aspect-ratios'
import { colors } from './colors'
import { fontSizes, fontWeights, letterSpacings, lineHeights } from './typography'
import { zIndex } from './z-index'

export const tokens = defineTokens({
  colors,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  zIndex,
  aspectRatios
})