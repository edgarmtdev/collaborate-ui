import { ButtonHTMLAttributes } from 'react'
import { cx } from '~root/styled-system/css'
import { button } from '~root/styled-system/recipes'
import type { RecipeVariantProps } from '~root/styled-system/types'

export type RecipeButtonProps = RecipeVariantProps<typeof button>

export type ButtonProps = RecipeButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof RecipeButtonProps>

export const Button = ({ variant, size, className, children }: ButtonProps) => {
  const styles = button({ variant, size })
  return (
    <button className={cx(styles, className)}>
      {children}
    </button>
  )
}
