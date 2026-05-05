import styles from './ProgressBar.module.css'

interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <progress
      className={styles.bar}
      value={current + 1}
      max={total}
      aria-label={`Painting ${current + 1} of ${total}`}
    />
  )
}
