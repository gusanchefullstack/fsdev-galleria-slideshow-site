import styles from './ProgressBar.module.css'

interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = ((current + 1) / total) * 100

  return (
    <div
      className={styles.track}
      role="progressbar"
      aria-valuenow={current + 1}
      aria-valuemin={1}
      aria-valuemax={total}
      aria-label={`Painting ${current + 1} of ${total}`}
    >
      <div
        className={styles.fill}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}
