import { Button } from '@/components/ui'
import { verifyEmailByToken } from '@/services/auth'
import Link from 'next/link'
import classes from './verify-email.styled'
import Image from 'next/image'
import { Navbar } from '@/components/landing'

export default async function VerifyEmailPage({
  searchParams
}: { searchParams: { token: string } }) {
  const token = searchParams.token

  if (!token) {
    return <h1>No invitation token provided</h1>
  }

  const response = await verifyEmailByToken(token)

  return (
    <>
      <Navbar isLoggedIn={false} />
      <main className={classes.root}>
        <Image src='/icon-mono.svg' alt='Email verified' width={320} height={320} />
        <div className={classes.container}>
          <h1 className={classes.title}>Verify Email Page</h1>
          {response.success
            ? (
              <div className={classes.successBox}>
                <p>{response.message || 'Email verified successfully!, you can now login'}</p>
                <Link href='/auth/login'>
                  <Button variant='primary'>
                    Go to Login
                  </Button>
                </Link>
              </div>
            )
            : (
              <p>An error occurred during verification. Try again later.</p>
            )}
        </div>
      </main>
    </>
  )
}
