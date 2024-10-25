import Link from 'next/link'
import classes from './aside.styled'

type Props = {
  userlogged: string
}
export function Aside({ userlogged }: Props) {
  return (
    <aside
      className={classes.asideRoot}
      role='navigation'
    >
      <div className={classes.container}>
        <div className={classes.panelWrapper}>
          <nav className={classes.panelNav}>
            <ul>
              <li>
                <Link href={`/dashboard/${userlogged}`}>Workspaces</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  )
}
