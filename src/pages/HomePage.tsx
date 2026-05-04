import { useNavigate } from 'react-router-dom'
import Header from '../components/Header/Header'
import GalleryGrid from '../components/GalleryGrid/GalleryGrid'
import { paintings } from '../data/paintings'

export default function HomePage() {
  const navigate = useNavigate()

  function handleStartSlideshow() {
    navigate('/gallery/0')
  }

  function handleSelectPainting(index: number) {
    navigate(`/gallery/${index}`)
  }

  return (
    <>
      <Header
        isPlaying={false}
        onStartSlideshow={handleStartSlideshow}
      />
      <GalleryGrid
        paintings={paintings}
        onSelectPainting={handleSelectPainting}
      />
    </>
  )
}
