import { forwardRef, type InputHTMLAttributes } from 'react'
import { input, type InputVariant } from '~root/styled-system/recipes'

type InputProps = InputHTMLAttributes<HTMLInputElement>
type Props = Partial<InputVariant> & Omit<InputProps, keyof InputVariant>

export const Input = forwardRef<HTMLInputElement, Props>(({
  color,
  size,
  ...props
}, ref) => {
  const styles = input({ color, size })

  return (
    <input
      ref={ref}
      className={styles}
      {...props}
    />
  )
})
