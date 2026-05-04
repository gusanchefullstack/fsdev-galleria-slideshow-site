import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProgressBar from '../components/ProgressBar/ProgressBar'

describe('ProgressBar', () => {
  it('fills ~6.67% at first slide (index 0 of 15)', () => {
    const { container } = render(<ProgressBar current={0} total={15} />)
    const fill = container.querySelector('[style]') as HTMLElement
    expect(fill.style.width).toBe('6.666666666666667%')
  })

  it('fills 50% at middle slide (index 7 of 15)', () => {
    const { container } = render(<ProgressBar current={7} total={15} />)
    const fill = container.querySelector('[style]') as HTMLElement
    expect(fill.style.width).toBe('53.333333333333336%')
  })

  it('fills 100% at last slide (index 14 of 15)', () => {
    const { container } = render(<ProgressBar current={14} total={15} />)
    const fill = container.querySelector('[style]') as HTMLElement
    expect(fill.style.width).toBe('100%')
  })

  it('has correct aria attributes', () => {
    const { getByRole } = render(<ProgressBar current={4} total={15} />)
    const bar = getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-valuenow', '5')
    expect(bar).toHaveAttribute('aria-valuemin', '1')
    expect(bar).toHaveAttribute('aria-valuemax', '15')
  })
})
