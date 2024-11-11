import { type ComponentPropsWithoutRef } from 'react'

export function Chevron(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M12 14.5L17 9.5H7L12 14.5Z' fill='current'/>
    </svg>
  )
}
