import type { Painting } from '../../types'
import styles from './PaintingCard.module.css'

interface PaintingCardProps {
  painting: Painting
  index: number
  onClick: (index: number) => void
}

export default function PaintingCard({ painting, index, onClick }: PaintingCardProps) {
  return (
    <button
      className={styles.card}
      onClick={() => onClick(index)}
      type="button"
      aria-label={`View ${painting.name} by ${painting.artist.name}`}
    >
      <img
        src={painting.images.thumbnail}
        alt={painting.name}
        className={styles.image}
      />
      <div className={styles.gradient} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.info}>
        <p className={styles.title}>{painting.name}</p>
        <p className={styles.artist}>{painting.artist.name}</p>
      </div>
    </button>
  )
}
