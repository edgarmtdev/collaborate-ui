import Image from 'next/image'
import Link from 'next/link'
import icon from '~root/public/icon.svg'
import navbarStyled from './navbar.styled'
import { Button } from '@/components/ui'

type Props = {
  isLoggedIn: boolean,
}

export function Navbar({ isLoggedIn }: Props) {
  return (
    <nav className={navbarStyled.navbar}>
      <div className={navbarStyled.container}>
        <Link href={'/'}>
          <Image
            src={icon}
            alt='icon'
            height={36}
            loading='eager'
            priority
          />
        </Link>
        <div className={navbarStyled.sessionOptions}>
          {isLoggedIn
            ? (
              <Link href={'/dashboard'}>
                <h2>Go to Dashboard →</h2>
              </Link>
            )
            : (
              <>
                <Link href='/auth/register'>Register</Link>
                <Link href='/auth/login'>
                  <Button>Log in</Button>
                </Link>
              </>
            )
          }
        </div>
      </div>
    </nav>
  )
}
