import { Button } from '@/components/ui'
import { classes } from './hero.styled'
import Image from 'next/image'

import imgHero from '~root/public/mockup-landing.png'

export function Hero() {
  return (
    <section className={classes.hero}>
      <h1 className={classes.h1}>
        Collaborate join's people with common goals
      </h1>
      <Button variant='black' size='lg'>
        Go for it
      </Button>
      <figure className={classes.figure}>
        <Image src={imgHero} fill alt='Hero image' />
      </figure>
    </section>
  )
}
