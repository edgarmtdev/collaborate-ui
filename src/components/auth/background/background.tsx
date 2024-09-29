import { Constant } from '@/common/const/Constant'
import Image from 'next/image'
import styled from './background.styled'

export function Background() {
  return (
    <figure className={styled.figure}>
      <Image
        src={Constant.AUTH_BG}
        alt='auth background'
        className={styled.image}
        fill
        loading='eager'
        priority
      />
      <div className={styled.bgOpacity}/>
    </figure>
  )
}
