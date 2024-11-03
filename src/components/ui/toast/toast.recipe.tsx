import { sva } from '~root/styled-system/css'

export const slotToastStyled = sva({
  slots: ['viewport', 'root', 'title', 'description'],
  base: {
    viewport: {
      zIndex: 'toast',
      position: 'fixed',
      top: 50,
      right: 80,
      w: 325,
      display: 'flex',
      flexDir: 'column'
    },
    root: {
      p: 15,
      bgColor: 'white',
      rounded: 4,
      shadow: 'md',
      display: 'grid',
      columnGap: 15,
      alignItems: 'center',
      '&[data-state="open"]': {
        animation: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)'
      }
    },
    title: {
      mb: 5,
      color: 'heading',
      fontWeight: 'bold',
      fontSize: 'md'
    },
    description: {
      color: 'text',
      fontSize: 'sm'
    }
  },
  variants: {
    type: {
      success: {
        root: {
          border: 4,
          borderTopStyle: 'solid',
          borderColor: 'primary.800'
        }
      },
      error: {
        root: {
          border: 4,
          borderTopStyle: 'solid',
          borderColor: 'cardinal.800'
        }
      }
    }
  }
})
