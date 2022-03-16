import { getGuessStatuses } from '../../lib/statuses'
import { Cell2 } from './Cell'
import { unicodeSplit } from '../../lib/words'

type Props = {
  guess: string
  isRevealing?: boolean
}

export const CompletedRow2 = ({ guess, isRevealing }: Props) => {
  const statuses = getGuessStatuses(guess,1)
  const splitGuess = unicodeSplit(guess)

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <Cell2
          key={i}
          value={letter}
          status={statuses[i]}
          position={i}
          isRevealing={isRevealing}
          isCompleted
        />
      ))}
    </div>
  )
}
