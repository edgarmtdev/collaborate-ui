import { LayoutProps } from '@/types/common'

export default function WorkspaceLayout({
  children
}: LayoutProps
) {
  return (
    <main>{children}</main>
  )
}
