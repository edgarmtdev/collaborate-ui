import { Icon } from '@/components/ui'
import { FacebookIcon, GoogleIcon } from '@/icons'
import { css } from '~root/styled-system/css'

export const footerStyles = css({
  position: 'relative',
  zIndex: 'docked',
  p: 12,
  mt: 10,
  color: 'white',
  bottom: 0,
  display: 'grid',
  gridTemplateColumns: 2,
  gap: 12,
  fontSize: 'sm',
  fontWeight: 'medium',
  '& div': {
    display: 'flex',
    fill: 'white',
    gap: 12,
    alignItems: 'center'
  },
  '& div:nth-child(2)': {
    justifyContent: 'end'
  },
  '& div:nth-child(3)': {
    justifyContent: 'center',
    gridColumn: 2
  },
  md: {
    gridTemplateColumns: 3,
    '& div:nth-child(2)': {
      justifyContent: 'center'
    },
    '& div:nth-child(3)': {
      justifyContent: 'end',
      gridColumn: 1
    }
  }
})

export function Footer() {
  return (
    <footer className={footerStyles}>
      <div>
        <Icon icon={FacebookIcon} />
        <Icon icon={GoogleIcon} />
      </div>
      <div>
        <p>Collaborate App Inc.</p>
      </div>
      <div>
        @2022 All rigths reserved
      </div>
    </footer>
  )
}
