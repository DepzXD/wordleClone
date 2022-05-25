import React, { useContext, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import {
  BoardState,
  BoardUIContext,
  GameState,
  WordList,
} from '../context/gameContext'
import { updateKeys, handleSpecialKeys } from '../utils/configBoard'
import { checkGameState } from '../utils/gameUtils'

const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
const row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

const ButtonStyle = styled.div`
  background-color: ${(props) => props.theme.gray};
  display: flex;
  height: 3.2rem;
  border-radius: 4px;
  padding: 1rem;
  min-width: 2.5rem;
  max-width: 4rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const RowStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  margin: 0.25em 0;
  font-family: 'Liberation Sans';
  font-weight: 700;
  font-size: 0.8em;
`

const Button = ({ val }) => {
  const [boardState, setBoardState] = useContext(BoardState)
  const [gameState, setGameState] = useContext(GameState)
  const [boardUiState, setBoardUiState] = useContext(BoardUIContext)
  const [wordList, _] = useContext(WordList)

  const updateBoard = useCallback((key) => {
    let result = false
    if (key == 'Enter' || key == 'Backspace') {
      result = handleSpecialKeys(
        key,
        boardState,
        gameState.currentRow,
        gameState.currentColumn,
        wordList
      )
      if (result) {
        const [board, word, row, column] = result
        setBoardState(board)
        let game = { ...gameState }
        game.currentColumn = column
        game.currentRow = row
        if (word) {
          const res = checkGameState(word, game.wordToGuess, wordList)
          let uiState = [...boardUiState]
          uiState[game.currentRow - 1] = res.guessedLetter
          setBoardUiState(uiState)
          if (res.isWin) {
            alert('You Winned')
            // Restart Game
          }
        }
        setGameState(game)
      }
    } else {
      result = updateKeys(
        key,
        boardState,
        gameState.currentRow,
        gameState.currentColumn
      )
      if (result) {
        const [board, row, column] = result
        setBoardState(board)
        let game = { ...gameState }
        game.currentColumn = column
        game.currentRow = row
        setGameState(game)
      }
    }
  })
  return <ButtonStyle onClick={() => updateBoard(val)}>{val}</ButtonStyle>
}

const Container = styled.div`
  overflow: hidden;
`

const Keyboard = () => {
  const [boardState, setBoardState] = useContext(BoardState)
  const [gameState, setGameState] = useContext(GameState)
  const [boardUiState, setBoardUiState] = useContext(BoardUIContext)
  const [wordList, _] = useContext(WordList)

  const handeleKeyPress = useCallback(({ key }) => {
    // console.log(gameState.wordToGuess)
    // if (key == 'Enter' || key == 'BackSpace') {
    //   let res = handleSpecialKeys(
    //     key,
    //     boardState,
    //     gameState.currentRow,
    //     gameState.currentColumn,
    //     wordList
    //   )
    //   if (res) {
    //     const [board, word, row, column] = result
    //     setBoardState(board)
    //     let game = { ...gameState }
    //     game.currentColumn = column
    //     game.currentRow = row
    //     if (word) {
    //       const res = checkGameState(word, gameState.wordToGuess, wordList)
    //       let uiState = [...boardUiState]
    //       uiState[game.currentRow - 1] = res.guessedLetter
    //       setBoardUiState(uiState)
    //       if (res.isWin) {
    //         alert('You Winned')
    //         // Restart Game
    //       }
    //     }
    //     setGameState(game)
    //   }
    // } else {
    //   let keys = [...row1, ...row2, ...row3]
    //   keys.forEach((letter) => {
    //     if (letter == key.toUpperCase()) {
    //       let result = updateKeys(
    //         key.toUpperCase(),
    //         boardState,
    //         gameState.currentRow,
    //         gameState.currentColumn
    //       )
    //       if (result) {
    //         const [board, row, column] = result
    //         setBoardState(board)
    //         let game = { ...gameState }
    //         game.currentColumn = column
    //         game.currentRow = row
    //         setGameState(game)
    //       }
    //     }
    //     return
    //   })
    // }
  })
  useEffect(() => {
    document.addEventListener('keyup', (e) => handeleKeyPress(e))
    return () => {
      document.removeEventListener('keyup', (e) => handeleKeyPress(e))
    }
  }, [handeleKeyPress])
  return (
    <Container>
      <RowStyle>
        {row1.map((val) => (
          <Button key={val} val={val} />
        ))}
      </RowStyle>
      <RowStyle>
        {row2.map((val) => (
          <Button key={val} val={val} />
        ))}
      </RowStyle>
      <RowStyle>
        <Button key={'Enter'} val={'Enter'} />
        {row3.map((val) => (
          <Button key={val} val={val} />
        ))}
        <Button key={'Backspace'} val={'Backspace'} />
      </RowStyle>
    </Container>
  )
}

export default Keyboard
