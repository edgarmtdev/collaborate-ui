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
  },
  hide: {
    '0%': { opacity: 1 },
    '100%': { opacity: 0 }
  },
  slideIn: {
    '0%': { transform: 'translateX(calc(100% + 25px))' },
    '100%': { transform: 'translateX(0)' }
  }
})
