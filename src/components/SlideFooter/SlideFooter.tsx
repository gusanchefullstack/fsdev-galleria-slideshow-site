import type { Painting } from '../../types'
import styles from './SlideFooter.module.css'

interface SlideFooterProps {
  painting: Painting
  currentIndex: number
  total: number
  onPrev: () => void
  onNext: () => void
}

export default function SlideFooter({ painting, currentIndex, total, onPrev, onNext }: SlideFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <div className={styles.inner}>
        <div className={styles.info}>
          <p className={styles.title}>{painting.name}</p>
          <p className={styles.artist}>{painting.artist.name}</p>
        </div>
        <nav className={styles.nav} aria-label="Slideshow navigation">
          <button
            className={styles.navBtn}
            onClick={onPrev}
            disabled={currentIndex === 0}
            type="button"
            aria-label="Previous painting"
          >
            <img src="/assets/shared/icon-back-button.svg" alt="" aria-hidden="true" />
          </button>
          <button
            className={styles.navBtn}
            onClick={onNext}
            disabled={currentIndex === total - 1}
            type="button"
            aria-label="Next painting"
          >
            <img src="/assets/shared/icon-next-button.svg" alt="" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </footer>
  )
}
