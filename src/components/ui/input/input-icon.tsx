import { ComponentType, forwardRef, type InputHTMLAttributes } from 'react'
import { RecipeVariantProps, sva } from '~root/styled-system/css'
import { Icon, type SVGElementProps } from '../icon'

// import { inputSlot, type InputVariant } from '~root/styled-system/recipes'
// type Props = {
//   icon: ComponentType<SVGElementProps>
// } & Partial<InputVariant> & Omit<InputProps, keyof InputVariant>

const slotInputRecipe = sva({
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
      backgroundColor: 'white',
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
      p: 7,
      borderColor: 'coolGray.500',
      '& svg': {
        fill: 'neutral'
      }
    }
  },
  variants: {
    variant: {
      main: {
        input: {
          borderColor: 'coolGray.500',
          _focus: {
            borderColor: 'secondary.600',
            shadow: 'sm'
          }
        }
      },
      error: {
        input: {
          borderColor: 'error',
          _focus: {
            shadow: 'sm'
          }
        }
      },
      fill: {
        input: {
          bgColor: 'coolGray.25',
          borderColor: 'coolGray.200',
          _placeholder: {
            color: 'coolGray.600'
          },
          _focus: {
            borderColor: 'secondary.600',
            shadow: 'sm'
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
    variant: 'main',
    size: 'md'
  }
})

type InputElementProps = InputHTMLAttributes<HTMLInputElement>

export type InputVariants = RecipeVariantProps<typeof slotInputRecipe>

export type InputProps = {
  icon: ComponentType<SVGElementProps>
} & InputVariants
  & InputElementProps

export const InputIcon = forwardRef<HTMLInputElement, InputProps>(({
  icon,
  variant,
  size,
  ...props
}, ref) => {
  const classes = slotInputRecipe({ variant, size })
  return (
    <div className={classes.root}>
      <div className={classes.icon}>
        <Icon icon={icon} size={'sm'} />
      </div>
      <input
        ref={ref}
        className={classes.input}
        {...props}
      />
    </div>
  )
})
