import Image from 'next/image'
import { avatar } from './avatar.styled'

type AvatarProps = { src?: string, fallback: string }

export function Avatar({ src, fallback = 'A' }: AvatarProps) {
  if (src) {
    return (
      <figure>
        <Image src={src} alt='Avatar' />
      </figure>
    )
  }

  const styled = avatar({})

  return (
    <div className={styled}>{fallback}</div>
  )
}
