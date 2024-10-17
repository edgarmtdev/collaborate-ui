import Image from 'next/image'
import Link from 'next/link'
import icon from '../../../../public/icon.svg'
import navbarStyled from './navbar.styled'

type Props = {
  isLoggedIn: boolean,
}

export function Navbar({ isLoggedIn }: Props) {
  return (
    <nav className={navbarStyled.navbar}>
      <div className={navbarStyled.container}>
        <div>
          <Link href={'/'}>
            <Image
              src={icon}
              alt='icon'
              height={36}
              loading='eager'
              priority
            />
          </Link>
        </div>
        <div className={navbarStyled.sessionOptions}>
          {isLoggedIn
            ? (
              <Link href={'/dashboard'}>
                <h2>Go to Dashboard →</h2>
              </Link>
            )
            : (
              <ul>
                <li>
                  <Link href='/auth/login'>Inicia sesión</Link>
                </li>
              </ul>
            )
          }
        </div>
      </div>
    </nav>
  )
}
