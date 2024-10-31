import { defineKeyframes } from '@pandacss/dev'

export const keyframes = defineKeyframes({
  loader: {
    '0%': { boxShadow: '16px 0 #fff, -16px 0 #fff2', background: 'white' },
    '33%': { boxShadow: '16px 0 #fff, -16px 0 #fff2', background: ' #fff2' },
    '66%': { boxShadow: '16px 0 #fff2, -16px 0 #fff', background: '#fff2' },
    '100%': { boxShadow: '16px 0 #fff2, -16px 0 #fff', background: 'white' }
  },
  spin: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  }
})
