import * as RadixToast from '@radix-ui/react-toast'
import { Dispatch, HTMLAttributes, SetStateAction } from 'react'
import { RecipeVariantProps } from '~root/styled-system/css'
import { Button } from '../button'
import { slotToastStyled } from './toast.recipe'

import type { ToastActionProps, ToastProps, ToastProviderProps } from '@radix-ui/react-toast'

type ElementProps = HTMLAttributes<HTMLElement>
type ToastVariants = RecipeVariantProps<typeof slotToastStyled>
type BaseProps = {
  title: string
  description: string
  open: boolean
  onOpenChange: Dispatch<SetStateAction<boolean>>
  duration?: number
}
type RadixToastElementProps = {
  provider?: ToastProviderProps
  root?: ToastProps
  action?: ToastActionProps
}

type ToastComponentProps = BaseProps & ToastVariants & RadixToastElementProps & ElementProps

export const Toast = ({
  title,
  description,
  provider,
  root,
  open,
  onOpenChange,
  duration,
  type
}: ToastComponentProps) => {
  const classes = slotToastStyled({ type })
  return (
    <RadixToast.Provider {...provider}>
      <RadixToast.Root
        open={open}
        onOpenChange={onOpenChange}
        className={classes.root}
        duration={duration}
        {...root}
      >
        <RadixToast.Title className={classes.title}>
          {title}
        </RadixToast.Title>
        <RadixToast.Description className={classes.description}>
          {description}
        </RadixToast.Description>
        <RadixToast.Close asChild>
          <Button size='xs' variant='black'>
            Close
          </Button>
        </RadixToast.Close>
      </RadixToast.Root>

      <RadixToast.Viewport className={classes.viewport} />
    </RadixToast.Provider>
  )
}
