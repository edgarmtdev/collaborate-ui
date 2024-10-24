import Image from 'next/image'
import { css, cx } from '~root/styled-system/css'
import { avatar } from './avatar.styled'

import { type HTMLAttributes } from 'react'
import { type RecipeVariantProps } from '~root/styled-system/css'
import { type ColorToken } from '~root/styled-system/tokens'

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
  const styled = cx(avatar({ size, radius }), css({ bgColor }))

  if (src) {
    return (
      <Component className={styled}>
        <Image
          fill
          src={src}
          alt='Avatar'
          loading='lazy'
        />
      </Component>
    )
  }

  return (
    <Component className={styled}>
      {fallback}
    </Component>
  )
}
