import { Aside } from '@/components/global/aside'
import { LayoutProps } from '@/types/common'
import { css } from '~root/styled-system/css'

export default async function DashboardLayout({
  children
}: LayoutProps
) {
  return (
    <main className={css({ display: 'flex', flexDir: 'row', flex: '1 1 0%', mt: 61 })}>
      <Aside />
      {children}
    </main>
  )
}
