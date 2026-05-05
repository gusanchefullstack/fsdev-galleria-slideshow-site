import type { Painting } from '../../types'
import PaintingCard from '../PaintingCard/PaintingCard'
import styles from './GalleryGrid.module.css'

interface GalleryGridProps {
  paintings: Painting[]
  onSelectPainting: (index: number) => void
}

export default function GalleryGrid({ paintings, onSelectPainting }: GalleryGridProps) {
  return (
    <main className={styles.grid} aria-label="Paintings gallery">
      {paintings.map((painting, index) => (
        <PaintingCard
          key={painting.name}
          painting={painting}
          index={index}
          onClick={onSelectPainting}
        />
      ))}
    </main>
  )
}
