import Image from 'next/image'
import img from '~root/public/dashboard-customize.png'
import classes from './banner.styled'

export function Banner() {
  return (
    <section className={classes.container}>
      <figure className={classes.figure}>
        <Image src={img} fill alt='Hero image' />
      </figure>
      <div className={classes.paragraph}>
        <h2>Imagine the possibilities</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, risus fringilla est vitae leo euismod donec dipiscing el</p>
      </div>
    </section>
  )
}
