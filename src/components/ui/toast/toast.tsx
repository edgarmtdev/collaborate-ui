'use client'

import * as RadixToast from '@radix-ui/react-toast'
import { Dispatch, HTMLAttributes, SetStateAction, useEffect, useRef } from 'react'
import { RecipeVariantProps } from '~root/styled-system/css'
import { Button } from '../button'
import { slotToastStyled } from './toast.recipe'

import type { ToastActionProps, ToastProps, ToastProviderProps } from '@radix-ui/react-toast'

type ElementProps = HTMLAttributes<HTMLElement>
type ToastVariants = RecipeVariantProps<typeof slotToastStyled>
type BaseProps = {
  title: string
  description?: string
  open: boolean
  onOpenChange: Dispatch<SetStateAction<boolean>>
  duration?: number
  onClose?: () => void
}
type RadixToastElementProps = {
  provider?: ToastProviderProps
  root?: ToastProps
  action?: ToastActionProps
}

type ToastComponentProps = BaseProps & ToastVariants & RadixToastElementProps & ElementProps

const ToastRoot = ({
  title,
  description,
  provider,
  root,
  open,
  onOpenChange,
  duration,
  type,
  onClose
}: ToastComponentProps) => {
  const classes = slotToastStyled({ type })
  const timingRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (open && duration) {
      timingRef.current = setTimeout(() => {
        onOpenChange(false)
        if (onClose) onClose()
      }, duration)
    }
    return () => {
      if (timingRef.current) {
        clearTimeout(timingRef.current)
        timingRef.current = null
      }
    }
  }, [open, duration, onOpenChange, onClose])

  return (
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
      <RadixToast.Description className={classes.description} hidden={!description}>
        {description}
      </RadixToast.Description>
      {/* <RadixToast.Close asChild>
          <Button size='xs' variant='black' onClick={onClose}>
            Close
        </Button>
        </RadixToast.Close> */}
    </RadixToast.Root>
  )
}

const ToastProvider = ({ children, ...props }: { children: React.ReactNode } & ToastProviderProps) => {
  const classes = slotToastStyled()

  return (
    <RadixToast.Provider {...props}>
      {children}
      <RadixToast.Viewport className={classes.viewport} />
    </RadixToast.Provider>
  )
}

export const Toast = {
  Provider: ToastProvider,
  Root: ToastRoot
}
