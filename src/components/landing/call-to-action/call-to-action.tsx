import { Button } from '@/components/ui'
import Image from 'next/image'
import { css } from '~root/styled-system/css'

import image from '~root/public/section2-landing.png'

export function CallToAction() {
  return (
    <section className={classes.bgRoot}>
      <div className={classes.container}>
        <div>
          <h2>Collaborate join's people with common goals</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, risus fringilla est vitae leo euismod donec dipiscing el</p>
          <Button>Sign Up - It's free</Button>
        </div>
        <div className={css({ px: 24 })}>
          <figure
            className={classes.figure}
          >
            <Image src={image} fill alt='Landing image' />
          </figure>
        </div>
      </div>
    </section>
  )
}

const classes = {
  bgRoot: css({ backgroundColor: '#151515', color: 'white', px: 12 }),
  container: css({
    maxWidth: 'breakpoint-2xl',
    mx: 'auto',
    py: 64,
    display: 'flex',
    flexDir: 'column',
    gap: 48,
    '& h2': {
      fontSize: '2xl',
      fontWeight: 'extraBold',
      mb: 32
    },
    '& p': {
      fontSize: 'lg',
      mb: 32
    },
    lg: {
      '& h2': { fontSize: '4xl' },
      '& p': { fontSize: 'xl' }
    }
  }),
  figure: css({
    maxW: 'breakpoint-lg',
    ml: 'auto',
    pos: 'relative',
    aspectRatio: 'mockMac',
    '& img': { objectFit: 'contain' }
  })
}
