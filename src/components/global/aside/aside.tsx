import Link from 'next/link'
import classes from './aside.styled'

export function Aside() {
  return (
    <aside className={classes.asideRoot}>
      <ul>
        <li>
          <Link href='/dashboard'>Workspaces</Link>
        </li>
      </ul>
    </aside>
  )
}
