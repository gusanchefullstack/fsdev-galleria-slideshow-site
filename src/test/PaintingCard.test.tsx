import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import PaintingCard from '../components/PaintingCard/PaintingCard'
import type { Painting } from '../types'

const mockPainting: Painting = {
  name: 'Starry Night',
  year: 1889,
  description: 'A famous painting by Van Gogh.',
  source: 'https://example.com',
  artist: { name: 'Vincent Van Gogh', image: '/assets/artist.jpg' },
  images: {
    thumbnail: '/assets/thumbnail.jpg',
    hero: { small: '/assets/hero-small.jpg', large: '/assets/hero-large.jpg' },
    gallery: '/assets/gallery.jpg',
  },
}

describe('PaintingCard', () => {
  it('renders painting title and artist name', () => {
    render(<PaintingCard painting={mockPainting} index={0} onClick={vi.fn()} />)
    expect(screen.getByText('Starry Night')).toBeInTheDocument()
    expect(screen.getByText('Vincent Van Gogh')).toBeInTheDocument()
  })

  it('renders thumbnail image with alt text', () => {
    render(<PaintingCard painting={mockPainting} index={0} onClick={vi.fn()} />)
    expect(screen.getByAltText('Starry Night')).toBeInTheDocument()
  })

  it('calls onClick with the correct index when clicked', async () => {
    const handleClick = vi.fn()
    render(<PaintingCard painting={mockPainting} index={3} onClick={handleClick} />)
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledWith(3)
  })

  it('has accessible aria-label', () => {
    render(<PaintingCard painting={mockPainting} index={0} onClick={vi.fn()} />)
    expect(
      screen.getByRole('button', { name: /View Starry Night by Vincent Van Gogh/i })
    ).toBeInTheDocument()
  })
})
