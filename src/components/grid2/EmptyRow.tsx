import { MAX_WORD_LENGTH } from '../../constants/settings'
import { Cell2 } from './Cell'

export const EmptyRow2 = () => {
  const emptyCells = Array.from(Array(MAX_WORD_LENGTH))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell2 key={i} />
      ))}
    </div>
  )
}
