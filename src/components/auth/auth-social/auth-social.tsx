import { Button } from '@/components/ui'
import { Icon } from '@/components/ui/icon'
import { FacebookIcon, GoogleIcon } from '@/icons'
import { css } from '~root/styled-system/css'

export function AuthWithSocial() {
  return (
    <section className={css({
      display: 'grid',
      gap: 34,
      py: 34
    })}
    >
      <Button variant='monocrom' width='full'>
        <Icon icon={GoogleIcon} color='neutral' />
        Continue with Google
      </Button>
      <Button variant='monocrom' width='full'>
        <Icon icon={FacebookIcon} color='neutral' />
        Continue with Facebook
      </Button>
    </section>
  )
}
