import { css } from '~root/styled-system/css'

export function Navbar() {
  return (
    <nav className={css({ bg: 'primary.950', color: 'white', py: 20 })}>
      <div className={css({ maxWidth: 'breakpoint-2xl', mx: 'auto' })}>
        <h1 className={css({ textStyle: 'header.lg', fontWeight: 700 })}>COLLABORATE</h1>
      </div>
    </nav>
  )
}
