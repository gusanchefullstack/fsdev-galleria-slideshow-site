import { Link } from 'react-router-dom'
import styles from './Header.module.css'

interface HeaderProps {
  isPlaying: boolean
  onStartSlideshow?: () => void
  onStopSlideshow?: () => void
}

export default function Header({ isPlaying, onStartSlideshow, onStopSlideshow }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" aria-label="Galleria home" className={styles.logo}>
          <img src="/assets/shared/logo.svg" alt="galleria." />
        </Link>
        {isPlaying ? (
          <button
            className={styles.button}
            onClick={onStopSlideshow}
            type="button"
          >
            Stop slideshow
          </button>
        ) : (
          <button
            className={styles.button}
            onClick={onStartSlideshow}
            type="button"
          >
            Start slideshow
          </button>
        )}
      </div>
    </header>
  )
}
