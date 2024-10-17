import { Button } from '@/components/ui'
import { classes } from './hero.styled'

export function Hero() {
  return (
    <section className={classes.hero}>
      <h1 className={classes.h1}>
        Collaborate join's people with common goals
      </h1>
      <Button variant='black' size='lg'>
        Go for it
      </Button>
    </section>
  )
}
