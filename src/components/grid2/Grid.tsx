import { MAX_CHALLENGES } from '../../constants/settings'
import { solution } from '../../lib/words'
import { CompletedRow2 } from './CompletedRow'
import { CurrentRow2 } from './CurrentRow'
import { EmptyRow2 } from './EmptyRow'

type Props = {
  guesses: string[]
  currentGuess: string
  isRevealing?: boolean
  currentRowClassName: string
}

export const Grid2 = ({
  guesses,
  currentGuess,
  isRevealing,
  currentRowClassName,
}: Props) => {
  const guessed = guesses.includes(solution[1])
  let empties = []
  if(guessed) {
    empties =
    guesses.length < MAX_CHALLENGES - 1
      ? Array.from(Array(MAX_CHALLENGES - 1 - guesses.indexOf(solution[1])))
      : []
  } else{
    empties =
      guesses.length < MAX_CHALLENGES - 1
        ? Array.from(Array(MAX_CHALLENGES - 1 - guesses.length))
        : []
  }

  return (
    <>
      {guesses.map((guess, i) => {
        if(guesses.includes(solution[1]) && i > guesses.indexOf(solution[1])){
          return
        } else {
          return (<CompletedRow2
            key={i}
            guess={guess}
            isRevealing={isRevealing && guesses.length - 1 === i}
          />
        )
        }
      })}
      {guesses.length < MAX_CHALLENGES && !guesses.includes(solution[1]) && (
        <CurrentRow2 guess={currentGuess} className={currentRowClassName} />
      )}
      {empties.map((_, i) => (
        <EmptyRow2 key={i} />
      ))}
    </>
  )
}
