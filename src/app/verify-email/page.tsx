import { verifyEmailByToken } from '@/services/auth'
import Link from 'next/link'
import React from 'react'

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
      <h1>Verify Email Page</h1>
      {response.success
        ? (
          <div>
            <p>{response.message}</p>
            <Link href='/auth/login'>Go to Login</Link>
          </div>
        )
        : (
          <p>An error occurred during verification. Try again later.</p>
        )}
    </>
  )
}
