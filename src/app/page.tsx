import { css } from '~root/styled-system/css'

export default function Home() {
  return (
    <div>
      <h1 className={css({ bg: 'primary.700', color: 'primary.950' })}>
        Collaborate
      </h1>
    </div>
  )
}
