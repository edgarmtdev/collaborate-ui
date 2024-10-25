import { Aside } from '@/components/global/aside'
import { validateUser } from '@/services/auth'
import { LayoutProps } from '@/types/common'
import { redirect } from 'next/navigation'
import { css } from '~root/styled-system/css'

type Props = LayoutProps & {
    params: { userlogged: string }
  }

export default async function DashboardLayout({
  children,
  params
}: Props
) {
  const { isLoggedIn, user } = await validateUser()

  if (!isLoggedIn) {
    redirect('/auth/login')
  }

  const { userlogged } = params

  if (userlogged !== user.username) {
    redirect(`/dashboard/${user.username}`)
  }
  return (
    <main className={css({ display: 'flex', flexDir: 'row', flex: '1 1 0%', mt: 61 })}>
      <Aside userlogged={userlogged} />
      {children}
    </main>
  )
}
