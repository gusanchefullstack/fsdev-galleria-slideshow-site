import type { Painting } from '../../types'
import styles from './DetailView.module.css'

interface DetailViewProps {
  painting: Painting
  onViewImage: () => void
}

export default function DetailView({ painting, onViewImage }: DetailViewProps) {
  return (
    <main className={styles.detail}>
      {/* Left: hero image + overlapping info panel */}
      <section className={styles.imageInfoContainer} aria-label="Painting image">
        <div className={styles.heroImageWrapper}>
          <picture>
            <source media="(min-width: 768px)" srcSet={painting.images.hero.large} />
            <img
              src={painting.images.hero.small}
              alt={painting.name}
              className={styles.heroImage}
            />
          </picture>
          <button
            className={styles.viewImageBtn}
            onClick={onViewImage}
            type="button"
          >
            <img src="/assets/shared/icon-view-image.svg" alt="" aria-hidden="true" />
            View image
          </button>
        </div>

        <div className={styles.infoPanel}>
          <div className={styles.titleSection}>
            <h1 className={styles.paintingTitle}>{painting.name}</h1>
            <p className={styles.paintingArtist}>{painting.artist.name}</p>
          </div>
          <div className={styles.artistPhotoContainer}>
            <img
              src={painting.artist.image}
              alt={painting.artist.name}
              className={styles.artistPhoto}
            />
          </div>
        </div>
      </section>

      {/* Right: year + description */}
      <aside className={styles.descriptionColumn}>
        <p className={styles.yearText} aria-hidden="true">{painting.year}</p>
        <div className={styles.descriptionContent}>
          <p className={styles.description}>{painting.description}</p>
          <a
            href={painting.source}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sourceLink}
          >
            Go to source
          </a>
        </div>
      </aside>
    </main>
  )
}
