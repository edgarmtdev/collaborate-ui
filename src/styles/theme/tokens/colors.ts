import { defineTokens } from '@pandacss/dev'

export const colors = defineTokens.colors({
  black: { value: '#000000' },
  white: { value: '#ffffff' },
  primary: {
    25: { value: '#DBEDE7' },
    50: { value: '#CEE7DF' },
    100: { value: '#B7DBCF' },
    200: { value: '#9ECEBE' },
    300: { value: '#86C2AE' },
    400: { value: '#6DB69E' },
    500: { value: '#55AA8E' },
    600: { value: '#3D9D7D' },
    700: { value: '#309775' },
    800: { value: '#25926E' },
    900: { value: '#188B65' },
    950: { value: '#0C855D' }
  },
  secondary: {
    25: { value: '#DAE7FC' },
    50: { value: '#CEDFFC' },
    100: { value: '#B6D0FA' },
    200: { value: '#9DC0F8' },
    300: { value: '#85B0F6' },
    400: { value: '#6DA0F5' },
    500: { value: '#5490F3' },
    600: { value: '#3C81F1' },
    700: { value: '#3079F1' },
    800: { value: '#2371F0' },
    900: { value: '#1769EF' },
    950: { value: '#0B61EE' }
  },
  coolGray: {
    50: { value: '#f9fafb' },
    100: { value: '#f3f4f6' },
    200: { value: '#e5e7eb' },
    300: { value: '#d1d5db' },
    400: { value: '#9ca3af' },
    500: { value: '#6b7280' },
    600: { value: '#4b5563' },
    700: { value: '#374151' },
    800: { value: '#1f2937' },
    900: { value: '#111827' }
  }
})
