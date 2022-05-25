export const updateKeys = (key, board, row, column) => {
  console.log(key, row, column);
  if (column > 4) {
    return false
  }
  board[row][column] = key
  return [board, row, column + 1]
}

export const handleSpecialKeys = (key, board, row, column, validWords) => {
  let word = board[row].join("").toLowerCase()
  console.log(word,validWords);
  if (key === 'Enter') {
    if (column !== 5 || !validWords.has(word)) {
      return false
    }
    return [board, word, row + 1, 0]
  }
  if (key === 'Backspace') {
    if (column < 0 || board[row][0] === '') {
      return false
    }
    column = column -1
    board[row][column] = ''
    return [board, false, row, column]
  }
}