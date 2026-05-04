import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import SlideFooter from '../components/SlideFooter/SlideFooter'
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

describe('SlideFooter', () => {
  it('renders painting name and artist', () => {
    render(
      <SlideFooter painting={mockPainting} currentIndex={0} total={15} onPrev={vi.fn()} onNext={vi.fn()} />
    )
    expect(screen.getByText('Starry Night')).toBeInTheDocument()
    expect(screen.getByText('Vincent Van Gogh')).toBeInTheDocument()
  })

  it('calls onNext when next button is clicked', async () => {
    const handleNext = vi.fn()
    render(
      <SlideFooter painting={mockPainting} currentIndex={0} total={15} onPrev={vi.fn()} onNext={handleNext} />
    )
    await userEvent.click(screen.getByRole('button', { name: /next painting/i }))
    expect(handleNext).toHaveBeenCalledTimes(1)
  })

  it('calls onPrev when prev button is clicked', async () => {
    const handlePrev = vi.fn()
    render(
      <SlideFooter painting={mockPainting} currentIndex={5} total={15} onPrev={handlePrev} onNext={vi.fn()} />
    )
    await userEvent.click(screen.getByRole('button', { name: /previous painting/i }))
    expect(handlePrev).toHaveBeenCalledTimes(1)
  })

  it('disables prev button at first slide', () => {
    render(
      <SlideFooter painting={mockPainting} currentIndex={0} total={15} onPrev={vi.fn()} onNext={vi.fn()} />
    )
    expect(screen.getByRole('button', { name: /previous painting/i })).toBeDisabled()
  })

  it('disables next button at last slide', () => {
    render(
      <SlideFooter painting={mockPainting} currentIndex={14} total={15} onPrev={vi.fn()} onNext={vi.fn()} />
    )
    expect(screen.getByRole('button', { name: /next painting/i })).toBeDisabled()
  })
})
