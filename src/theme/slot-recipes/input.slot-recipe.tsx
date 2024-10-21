import { defineSlotRecipe } from '@pandacss/dev'

export const inputSlot = defineSlotRecipe({
  className: 'Input',
  description: 'The styles for Input Icon Component',
  slots: ['root', 'input', 'icon'],
  base: {
    root: {
      position: 'relative',
      w: '100%',
      borderRadius: 4,
      isolation: 'isolate'
    },
    input: {
      top: 0,
      w: '100%',
      position: 'absolute',
      zIndex: 'docked',
      border: 1,
      borderRadius: 4,
      borderStyle: 'solid',
      fontWeight: 'medium',
      _focus: {
        outline: 'none'
      },
      _placeholder: {
        color: 'coolGray.200'
      }
    },
    icon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      zIndex: 'bgOpacity',
      p: 7
    }
  },
  variants: {
    color: {
      main: {
        root: {},
        input: {
          borderColor: 'coolGray.500',
          backgroundColor: 'white',
          bg: 'white'
        },
        icon: {
          '& svg': {
            fill: 'coolGray.950'
          }
        }
      },
      error: {
        input: {
          borderStyle: 'solid',
          backgroundColor: 'white',
          borderColor: 'error'
        },
        icon: {
          '& svg': {
            fill: 'error'
          }
        }
      }
    },
    size: {
      sm: {
        root: {
          h: 29
        },
        input: {
          fontSize: 'sm',
          py: 3,
          pr: 5,
          pl: 29
        },
        icon: {
          w: 29,
          h: 29
        }
      },
      md: {
        root: {
          h: 36
        },
        input: {
          fontSize: 'md',
          py: 5,
          pr: 8,
          pl: 36
        },
        icon: {
          w: 36,
          h: 36
        }
      },
      lg: {
        root: {
          h: 39
        },
        input: {
          fontSize: 'lg',
          py: 5,
          pr: 8,
          pl: 39
        },
        icon: {
          w: 39,
          h: 39
        }
      }
    }
  },
  defaultVariants: {
    color: 'main',
    size: 'md'
  }
})