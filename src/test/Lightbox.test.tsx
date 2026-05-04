import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import Lightbox from '../components/Lightbox/Lightbox'
import type { Painting } from '../types'

const mockPainting: Painting = {
  name: 'Starry Night',
  year: 1889,
  description: 'A famous painting.',
  source: 'https://example.com',
  artist: { name: 'Vincent Van Gogh', image: '/assets/artist.jpg' },
  images: {
    thumbnail: '/assets/thumbnail.jpg',
    hero: { small: '/assets/hero-small.jpg', large: '/assets/hero-large.jpg' },
    gallery: '/assets/gallery.jpg',
  },
}

describe('Lightbox', () => {
  it('renders gallery image and close button', () => {
    render(<Lightbox painting={mockPainting} onClose={vi.fn()} />)
    expect(screen.getByAltText('Starry Night')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
  })

  it('has correct dialog role and aria attributes', () => {
    render(<Lightbox painting={mockPainting} onClose={vi.fn()} />)
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('aria-label', 'Full image: Starry Night')
  })

  it('calls onClose when close button is clicked', async () => {
    const handleClose = vi.fn()
    render(<Lightbox painting={mockPainting} onClose={handleClose} />)
    await userEvent.click(screen.getByRole('button', { name: /close/i }))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when Escape key is pressed', async () => {
    const handleClose = vi.fn()
    render(<Lightbox painting={mockPainting} onClose={handleClose} />)
    await userEvent.keyboard('{Escape}')
    expect(handleClose).toHaveBeenCalledTimes(1)
  })
})
