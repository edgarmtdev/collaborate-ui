import Image from 'next/image'
import { type HTMLAttributes } from 'react'
import { css, cx, type RecipeVariantProps } from '~root/styled-system/css'
import { type ColorToken } from '~root/styled-system/tokens'
import { avatar } from './avatar.styled'

type ElementProps = HTMLAttributes<ElementProps>

type ElementVariants = RecipeVariantProps<typeof avatar>

type AllowedElements = 'div' | 'span'

type BaseProps = {
  as?: AllowedElements
  src?: string
  fallback: string
  bgColor?: ColorToken
}

type AvatarProps = BaseProps & ElementProps & ElementVariants

export function Avatar({
  as: Component = 'div',
  src,
  size,
  radius,
  bgColor,
  fallback = 'A'
}: AvatarProps) {
  if (src) {
    return (
      <figure>
        <Image src={src} alt='Avatar' />
      </figure>
    )
  }

  const styled = cx(avatar({ size, radius }), css({ bgColor }))

  return (
    <Component className={styled}>{fallback}</Component>
  )
}
