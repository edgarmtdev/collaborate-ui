'use client'

import Link from 'next/link'
import * as Collapsible from '@radix-ui/react-collapsible'
import classes from './aside.styled'
import { useState } from 'react'
import { css } from '~root/styled-system/css'
import { Icon } from '@/components/ui'
import { Chevron } from '@/icons'

export function Aside() {
  const [open, setOpen] = useState(true)
  return (
    <aside
      className={classes.asideRoot}
      role='navigation'
    >
      <div className={classes.container}>
        <div className={classes.panelWrapper}>
          <nav className={classes.panelNav}>
            <Collapsible.Root
              open={open}
              onOpenChange={setOpen}
            >
              <Collapsible.Trigger className={css({ w: '100%', display: 'flex', justifyContent: 'start', mb: 6 })}>
                <div className={css({
                  py: 8,
                  px: 18,
                  rounded: 4,
                  w: '100%',
                  display: 'flex',
                  fontSize: 'lg',
                  fontWeight: 'semibold',
                  justifyContent: 'start',
                  alignItems: 'center',
                  _hover: {
                    bg: 'secondary.50'
                  },
                  cursor: 'pointer',
                  bg: open ? 'secondary.50' : 'transparent',
                  transition: 'all 200ms'
                })}>
                  <h1>Dashboard</h1>
                  <Icon
                    icon={Chevron}
                    color='neutral'
                    className={css({ rotate: open ? '0' : '-90deg', transition: 'all 200ms' })}
                  />
                </div>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <ul className={css({ pl: 32 })}>
                  <li>
                    <Link href={'/dashboard'}>Workspaces</Link>
                  </li>
                </ul>
              </Collapsible.Content>
            </Collapsible.Root>
          </nav>
        </div>
      </div>
    </aside>
  )
}
