
export const checkGameState = (word, wordToGuess, validWords) => {
  let guessedLetter = []
  let isWin = true
  if (validWords.has(word)) {
    for (let i = 0; i < wordToGuess.length; i++) {
      if (word[i] === wordToGuess[i]) {
        guessedLetter.push("Yes")
        continue
      } else if (wordToGuess.includes(word[i])) {
        guessedLetter.push("InWord")
        isWin = false
        continue
      } else {
        guessedLetter.push("No")
        isWin = false
        continue
      }
    }
  } else {
    return false
  }
  return {isWin, guessedLetter}
}

