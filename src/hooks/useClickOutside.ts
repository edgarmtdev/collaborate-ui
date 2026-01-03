import { useEffect, useRef } from 'react'

type UseClickOutsideOptions = {
  enabled?: boolean;
  detectEscapeKey?: boolean;
}

export function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  onOutside: () => void,
  options: UseClickOutsideOptions
) {
  const { enabled = true, detectEscapeKey = true } = options
  const handlerRef = useRef(onOutside)

  useEffect(() => {
    handlerRef.current = onOutside
  }, [onOutside])

  useEffect(() => {
    if (!options?.enabled) return

    function handlePointerDown(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handlerRef.current()
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (options?.detectEscapeKey && event.key === 'Escape') {
        handlerRef.current()
      }
    }
    document.addEventListener('touchstart', handlePointerDown)
    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('touchstart', handlePointerDown)
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [ref, enabled, detectEscapeKey])
}
