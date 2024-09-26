import { Ubuntu } from 'next/font/google'

const font = Ubuntu({
  weight: ['300', '400', '500', '700'],
  preload: true,
  subsets: ['latin']
})

export default function Home () {
  return (
    <div className={font.className}></div>
  )
}
