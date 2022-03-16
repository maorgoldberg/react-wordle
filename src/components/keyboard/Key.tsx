import { ReactNode } from 'react'
import classnames from 'classnames'
import { CharStatus } from '../../lib/statuses'
import { MAX_WORD_LENGTH, REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'

type Props = {
  children?: ReactNode
  value: string
  width?: number
  status?: CharStatus
  onClick: (value: string) => void
  isRevealing?: boolean
}

export const Key = ({
  children,
  status,
  width = 40,
  value,
  onClick,
  isRevealing,
}: Props) => {
  const keyDelayMs = REVEAL_TIME_MS * MAX_WORD_LENGTH
  const isHighContrast = getStoredIsHighContrastMode()

  const classes = classnames(
    'flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none dark:text-white',
    {
      'transition ease-in-out': isRevealing,
      'bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 active:bg-slate-400':
        !status,
      'bg-slate-400 dark:bg-slate-800 text-white': status === 'absent',
      'bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white':
        status === 'correct' && isHighContrast,
      'bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white':
        status === 'present' && isHighContrast,
      'bg-green-500 hover:bg-green-600 active:bg-green-700 text-white':
        status === 'correct' && !isHighContrast,
      'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white':
        status === 'present' && !isHighContrast,
    }
  )

  const styles = {
    width: `${width}px`,
    height: '58px',
    background: ''
  }
  if (status === 'split-r'){
    styles['background'] = 'conic-gradient(rgb(30, 41, 59) 0deg, rgb(30, 41, 59) 90deg, rgb(30, 41, 59) 90deg, rgb(30, 41, 59) 180deg, rgb(0, 204, 136) 180deg, rgb(0, 204, 136) 270deg, rgb(0, 204, 136) 270deg, rgb(0, 204, 136) 360deg)'
  }

  if (status === 'split-l'){
    styles['background'] = 'conic-gradient(rgb(0, 204, 136) 0deg, rgb(0, 204, 136) 90deg, rgb(0, 204, 136) 90deg, rgb(0, 204, 136) 180deg, rgb(30, 41, 59) 180deg, rgb(30, 41, 59) 270deg, rgb(30, 41, 59) 270deg, rgb(30, 41, 59) 360deg)'
  }

  if (status === 'p-split-r'){
    styles['background'] = 'conic-gradient(rgb(255, 204, 0) 0deg, rgb(255, 204, 0) 90deg, rgb(255, 204, 0) 90deg, rgb(255, 204, 0) 180deg, rgb(0, 204, 136) 180deg, rgb(0, 204, 136) 270deg, rgb(0, 204, 136) 270deg, rgb(0, 204, 136) 360deg)'
  }

  if (status === 'p-split-l'){
    styles['background'] = 'conic-gradient(rgb(0, 204, 136) 0deg, rgb(0, 204, 136) 90deg, rgb(0, 204, 136) 90deg, rgb(0, 204, 136) 180deg, rgb(255, 204, 0) 180deg, rgb(255, 204, 0) 270deg, rgb(255, 204, 0) 270deg, rgb(255, 204, 0) 360deg)'
  }
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value)
    event.currentTarget.blur()
  }

  return (
    <button style={styles} className={classes} onClick={handleClick}>
      {children || value}
    </button>
  )
}
