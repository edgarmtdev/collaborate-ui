import { LayoutProps } from '@/types/common'
import { css } from '~root/styled-system/css'

export default function WorkspaceLayout({
  children
}: LayoutProps
) {
  return (
    <main className={css({ display: 'flex', flexDirection: 'column', height: '100vh' })}>{children}</main>
  )
}
