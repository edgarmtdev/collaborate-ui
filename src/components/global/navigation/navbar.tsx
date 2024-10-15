import { css } from '~root/styled-system/css'

type Props = {
  isLoggedIn: boolean,
  user?: any
}

export function Navbar({ isLoggedIn, user }: Props) {
  return (
    <nav className={css({
      bg: 'primary.950',
      color: 'white',
      py: 20,
      display: 'grid',
      gridTemplateColumns: '2',
      p: 12
    })}>
      <div className={css({ maxWidth: 'breakpoint-2xl' })}>
        <h1 className={css({ textStyle: 'header.lg', fontWeight: 700 })}>
          COLLABORATE
        </h1>
      </div>
      {isLoggedIn &&
        <div className={css({ ml: 'auto' })}>
          <h2>{user?.name}</h2>
        </div>
      }
    </nav>
  )
}
