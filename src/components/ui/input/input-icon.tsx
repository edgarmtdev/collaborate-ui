import { forwardRef, type InputHTMLAttributes } from 'react'
import { inputSlot, type InputVariant } from '~root/styled-system/recipes'

type InputProps = InputHTMLAttributes<HTMLInputElement>
type Props = Partial<InputVariant> & Omit<InputProps, keyof InputVariant>

export const Input = forwardRef<HTMLInputElement, Props>(({ size, color, ...props }, ref) => {
  const classes = inputSlot({})
  return (
    <div>
      <input
        ref={ref}
        className={classes.input}
        {...props}
      />
    </div>
  )
})
