import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header/Header'
import DetailView from '../components/DetailView/DetailView'
import SlideFooter from '../components/SlideFooter/SlideFooter'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Lightbox from '../components/Lightbox/Lightbox'
import { paintings } from '../data/paintings'
import styles from './GalleryPage.module.css'

export default function GalleryPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const currentIndex = Math.max(0, Math.min(parseInt(id ?? '0', 10), paintings.length - 1))
  const painting = paintings[currentIndex]

  function handlePrev() {
    if (currentIndex > 0) {
      navigate(`/gallery/${currentIndex - 1}`)
    }
  }

  function handleNext() {
    if (currentIndex < paintings.length - 1) {
      navigate(`/gallery/${currentIndex + 1}`)
    }
  }

  function handleStop() {
    navigate('/')
  }

  return (
    <div className={styles.page}>
      <Header
        isPlaying={true}
        onStopSlideshow={handleStop}
      />
      <DetailView
        painting={painting}
        onViewImage={() => setLightboxOpen(true)}
      />
      <SlideFooter
        painting={painting}
        currentIndex={currentIndex}
        total={paintings.length}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <ProgressBar current={currentIndex} total={paintings.length} />
      {lightboxOpen && (
        <Lightbox
          painting={painting}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  )
}
