import { MAX_CHALLENGES } from '../../constants/settings'
import { CompletedRow } from './CompletedRow'
import { solution } from '../../lib/words'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'

type Props = {
  guesses: string[]
  currentGuess: string
  isRevealing?: boolean
  currentRowClassName: string
}

export const Grid = ({
  guesses,
  currentGuess,
  isRevealing,
  currentRowClassName,
}: Props) => {
  const guessed = guesses.includes(solution[0])
  let empties = []
  if(guessed) {
    empties =
    guesses.length < MAX_CHALLENGES - 1
      ? Array.from(Array(MAX_CHALLENGES - 1 - guesses.indexOf(solution[0])))
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
        if(guesses.includes(solution[0]) && i > guesses.indexOf(solution[0])){
          return null
        } else {
          return (<CompletedRow
            key={i}
            guess={guess}
            isRevealing={isRevealing && guesses.length - 1 === i}
          />
        )
        }
      })}
      {guesses.length < MAX_CHALLENGES && !guesses.includes(solution[0]) &&  (
        <CurrentRow guess={currentGuess} className={currentRowClassName} />
      )}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </>
  )
}
