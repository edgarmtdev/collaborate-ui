import { LoaderIcon } from '@/icons'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { css, cx } from '~root/styled-system/css'
import { button } from '~root/styled-system/recipes'
import { Icon } from '../icon'

import type { RecipeVariantProps } from '~root/styled-system/types'

export type RecipeButtonProps = RecipeVariantProps<typeof button>

export type ButtonProps = { loading?: boolean } & RecipeButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof RecipeButtonProps>

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, loading, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cx(button({ ...props }), className)}
      {...props}
    >
      {loading
        ? (
          <Icon icon={LoaderIcon} className={css({ animation: 'spin 1s linear infinite' })} />
        )
        : (
          children
        )}
    </button>
  )
})
