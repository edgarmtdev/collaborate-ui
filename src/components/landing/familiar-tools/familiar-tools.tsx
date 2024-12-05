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
    <section className={css({
      maxWidth: 'breakpoint-2xl',
      mx: 'auto',
      py: 128,
      '& h2': { fontSize: '4xl', fontWeight: 'extraBold', color: 'heading', textAlign: 'center' }
    })}>
      <h2>Working with familiar tools</h2>
      <div className={css({ display: 'flex', gap: 72, justifyContent: 'center', mt: 64 })}>
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
