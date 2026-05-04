import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import GalleryGrid from '../components/GalleryGrid/GalleryGrid'
import { paintings } from '../data/paintings'

describe('GalleryGrid', () => {
  it('renders all 15 painting cards', () => {
    render(<GalleryGrid paintings={paintings} onSelectPainting={vi.fn()} />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(15)
  })

  it('renders each painting title', () => {
    render(<GalleryGrid paintings={paintings} onSelectPainting={vi.fn()} />)
    paintings.forEach((p) => {
      expect(screen.getByText(p.name)).toBeInTheDocument()
    })
  })

  it('calls onSelectPainting with the correct index when a card is clicked', async () => {
    const handleSelect = vi.fn()
    render(<GalleryGrid paintings={paintings} onSelectPainting={handleSelect} />)
    const buttons = screen.getAllByRole('button')
    await userEvent.click(buttons[2])
    expect(handleSelect).toHaveBeenCalledWith(2)
  })
})
