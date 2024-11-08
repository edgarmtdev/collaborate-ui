import { alert } from '~root/styled-system/recipes'

import { type RecipeVariantProps } from '~root/styled-system/types'

type ElementType = 'span' | 'div'
type RecipeAlertProps = RecipeVariantProps<typeof alert>

type AlertProps = { as?: ElementType, title: string } & RecipeAlertProps

export const Alert = ({
  as: Component = 'div',
  title,
  status,
  size
}: AlertProps) => {
  const styles = alert({ status, size })
  return (
    <Component className={styles}>
      {title}
    </Component>
  )
}
