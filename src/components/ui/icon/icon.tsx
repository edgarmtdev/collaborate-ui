import { ComponentType, SVGAttributes } from 'react'
import { cx } from '~root/styled-system/css'
import { icon, IconVariant } from '~root/styled-system/recipes'

export type SVGElementProps = SVGAttributes<SVGElement>

type Props = {
  icon: ComponentType<SVGElementProps>
} & Partial<IconVariant> & Omit<SVGElementProps, keyof IconVariant>

export function Icon({
  icon: Icon,
  className,
  size,
  color
}: Props) {
  if (className) {
    return <Icon />
  }

  const styles = icon({ size, color })
  return <Icon className={cx(className, styles)} />
}
