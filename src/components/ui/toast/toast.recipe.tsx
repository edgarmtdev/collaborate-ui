import { sva } from '~root/styled-system/css'

export const slotToastStyled = sva({
  slots: ['viewport', 'root', 'title', 'description', 'action'],
  base: {
    viewport: {
      zIndex: 'toast',
      position: 'fixed',
      top: 50,
      right: 8,
      w: 300,
      md: {
        top: 50,
        right: 80,
        w: 325
      }
    },
    root: {
      p: 15,
      bgColor: 'white',
      rounded: 4,
      shadow: 'md',
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
      gap: 8
    },
    title: {
      color: 'heading',
      fontWeight: 'bold',
      fontSize: 'md',
      gridArea: '1 / 1 / 2 / 5'
    },
    description: {
      color: 'text',
      fontSize: 'sm',
      gridArea: '2 / 1 / 3 / 6'
    }
  },
  variants: {
    type: {
      success: {
        root: {
          border: 5,
          borderTopStyle: 'solid',
          borderColor: 'primary.800'
        }
      },
      error: {
        root: {
          border: 5,
          borderTopStyle: 'solid',
          borderColor: 'cardinal.800'
        }
      }
    }
  }
})
