import { solution, unicodeSplit } from './words'

export type CharStatus = 'absent' | 'present' | 'correct' | 'split-r' | 'split-l' | 'p-split-l' | 'p-split-r'

export const getStatuses = (
  guesses: string[],
  grid: number
): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {}
  const splitSolution = unicodeSplit(solution[0])
  const splitSolution2 = unicodeSplit(solution[1])

  guesses.forEach((word) => {
    unicodeSplit(word).forEach((letter, i) => {
      if (!splitSolution.includes(letter) && !splitSolution2.includes(letter)) {
        // make status absent
        return (charObj[letter] = 'absent')
      }

      if (letter === splitSolution[i] && letter === splitSolution2[i]) {
        //make status correct
        return (charObj[letter] = 'correct')
      }

      if (letter === splitSolution[i] && letter !== splitSolution2[i]) {
        if (letter === splitSolution[i] && splitSolution2.includes(letter)) {
          //make status correct
          return (charObj[letter] = 'p-split-l')
        }
        //make status correct
        return (charObj[letter] = 'split-l')
      }

      if (letter !== splitSolution[i] && letter === splitSolution2[i]) {
        if (splitSolution.includes(letter) && letter === splitSolution2[i]) {
          //make status correct
          return (charObj[letter] = 'p-split-r')
        }
        //make status correct
        return (charObj[letter] = 'split-r')
      }

      if (charObj[letter] !== 'correct') {
        //make status present
        return (charObj[letter] = 'present')
      }
    })
  })

  return charObj
}

export const getGuessStatuses = (guess: string, grid: number): CharStatus[] => {
  const splitSolution = unicodeSplit(solution[grid])
  const splitGuess = unicodeSplit(guess)

  const solutionCharsTaken = splitSolution.map((_) => false)

  const statuses: CharStatus[] = Array.from(Array(guess.length))

  // handle all correct cases first
  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    }
  })

  splitGuess.forEach((letter, i) => {
    if (statuses[i]) return

    if (!splitSolution.includes(letter)) {
      // handles the absent case
      statuses[i] = 'absent'
      return
    }

    // now we are left with "present"s
    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) => x === letter && !solutionCharsTaken[index]
    )

    if (indexOfPresentChar > -1) {
      statuses[i] = 'present'
      solutionCharsTaken[indexOfPresentChar] = true
      return
    } else {
      statuses[i] = 'absent'
      return
    }
  })

  return statuses
}
