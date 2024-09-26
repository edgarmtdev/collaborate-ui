import { css } from '~root/styled-system/css'

export function Navbar() {
  return (
    <nav className={css({ bg: 'primary.950', color: 'white', py: 10 })}>
      <div className={css({ maxWidth: 'breakpoint-xl', mx: 'auto' })}>
        <h1 className={css({ textStyle: 'header.xl' })}>Collaborate</h1>
      </div>
    </nav>
  )
}
