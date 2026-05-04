import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { Painting } from '../../types'
import styles from './Lightbox.module.css'

interface LightboxProps {
  painting: Painting
  onClose: () => void
}

export default function Lightbox({ painting, onClose }: LightboxProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeBtnRef.current?.focus()

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return createPortal(
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={`Full image: ${painting.name}`}
      onClick={handleOverlayClick}
    >
      <div className={styles.toolbar}>
        <button
          ref={closeBtnRef}
          className={styles.closeBtn}
          onClick={onClose}
          type="button"
        >
          Close
        </button>
      </div>
      <img
        src={painting.images.gallery}
        alt={painting.name}
        className={styles.image}
      />
    </div>,
    document.body
  )
}
