import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProgressBar from '../components/ProgressBar/ProgressBar'

describe('ProgressBar', () => {
  it('sets value=1 and max=15 at first slide (index 0 of 15)', () => {
    const { getByRole } = render(<ProgressBar current={0} total={15} />)
    const bar = getByRole('progressbar')
    expect(bar).toHaveAttribute('value', '1')
    expect(bar).toHaveAttribute('max', '15')
  })

  it('sets value=8 and max=15 at middle slide (index 7 of 15)', () => {
    const { getByRole } = render(<ProgressBar current={7} total={15} />)
    const bar = getByRole('progressbar')
    expect(bar).toHaveAttribute('value', '8')
    expect(bar).toHaveAttribute('max', '15')
  })

  it('sets value=15 and max=15 at last slide (index 14 of 15)', () => {
    const { getByRole } = render(<ProgressBar current={14} total={15} />)
    const bar = getByRole('progressbar')
    expect(bar).toHaveAttribute('value', '15')
    expect(bar).toHaveAttribute('max', '15')
  })

  it('has correct aria-label', () => {
    const { getByRole } = render(<ProgressBar current={4} total={15} />)
    const bar = getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-label', 'Painting 5 of 15')
  })
})
