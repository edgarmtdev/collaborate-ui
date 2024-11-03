import * as RadixToast from '@radix-ui/react-toast'
import { HTMLAttributes } from 'react'
import { cx, RecipeVariantProps } from '~root/styled-system/css'
import { slotToastStyled } from './toast.recipe'

import type { ToastActionProps, ToastProviderProps } from '@radix-ui/react-toast'

type ElementProps = HTMLAttributes<HTMLElement>
type RadixToastElementProps = { provider: ToastProviderProps, action?: ToastActionProps }
type ToastVariants = RecipeVariantProps<typeof slotToastStyled>

type ToastProps = { title: string, description: string, open: boolean } & ToastVariants & RadixToastElementProps & ElementProps

export const Toast = ({
  title,
  description,
  provider,
  open,
  type
}: ToastProps) => {
  const classes = slotToastStyled({ type })
  return (
    <RadixToast.Provider {...provider} >
      <RadixToast.Root open={open} className={cx(classes.root, 'ToastRoot')}>
        <RadixToast.Title className={classes.title}>
          {title}
        </RadixToast.Title>
        <RadixToast.Description className={classes.description}>
          {description}
        </RadixToast.Description>
      </RadixToast.Root>

      <RadixToast.Viewport className={classes.viewport} />
    </RadixToast.Provider>
  )
}
