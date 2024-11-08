import { LoaderIcon } from '@/icons'
import { ButtonHTMLAttributes } from 'react'
import { cx } from '~root/styled-system/css'
import { button } from '~root/styled-system/recipes'
import { Icon } from '../icon'

import type { RecipeVariantProps } from '~root/styled-system/types'

export type RecipeButtonProps = RecipeVariantProps<typeof button>

export type ButtonProps = { loading?: boolean } & RecipeButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof RecipeButtonProps>

export const Button = ({ variant, size, loading, className, children }: ButtonProps) => {
  const styles = button({ variant, size })
  return (
    <button className={cx(styles, className)} disabled={loading}>
      {loading
        ? <Icon icon={LoaderIcon} className='button-loader' />
        : children
      }
    </button>
  )
}
