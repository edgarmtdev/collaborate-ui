import { css } from '~root/styled-system/css'
import Image from 'next/image'

import Discord from '@/icons/svg/discord.svg'
import DropBox from '@/icons/svg/dropbox.svg'
import Drive from '@/icons/svg/google-drive.svg'
import Meet from '@/icons/svg/meet.svg'
import Slack from '@/icons/svg/slack.svg'
import Teams from '@/icons/svg/teams.svg'

export function FamiliarTools() {
  return (
    <section
      className={classes.root}
    >
      <h2>Working with familiar tools</h2>
      <div
        className={classes.familiarTools}
      >
        <Image src={Discord} alt='' loading='lazy' />
        <Image src={DropBox} alt='' loading='lazy' />
        <Image src={Drive} alt='' loading='lazy' />
        <Image src={Meet} alt='' loading='lazy' />
        <Image src={Slack} alt='' loading='lazy' />
        <Image src={Teams} alt='' loading='lazy' />
      </div>
    </section>
  )
}

export const classes = {
  root: css({
    maxWidth: 'breakpoint-2xl',
    mx: 'auto',
    py: 128,
    px: 12,
    '& h2': {
      fontSize: '4xl',
      fontWeight: 'extraBold',
      color: 'heading',
      textAlign: 'center'
    }
  }),
  familiarTools: css({
    display: 'flex',
    gap: 32,
    justifyContent: 'center',
    mt: 64,
    flexWrap: 'wrap',
    '& img': { aspectRatio: 'square', w: 40, lg: { w: 80 } },
    lg: { gap: 64 }
  })
}
