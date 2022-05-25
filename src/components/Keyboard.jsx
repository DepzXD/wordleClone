import React, { useContext, useCallback } from 'react'
import styled from 'styled-components'
import { BoardState, GameState } from '../context/gameContext'

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

const updateKeys = (key, board, row, column) => {
  return board
}

const handleSpecialKeys = (key, board, row, column) => {
  if (key === 'Enter') {
    return board
  }
  if (key === 'Back') {
    return board
  }
}

const Button = ({ val }) => {
  const [boardState, setBoardState] = useContext(BoardState)
  const [gameState, setGameState] = useContext(GameState)
  const updateBoard = useCallback((key) => {
    // console.log(gameState)
    // let board = [...boardState]
    // let game = { ...gameState }
    // console.log(board)
    // board[gameState.currentRow][gameState.currentColumn] = key
    // game.currentColumn += 1
    // setBoardState(board)
    // console.log(boardState, gameState)
    // setGameState(game)
  })
  return <ButtonStyle onClick={() => updateBoard(val)}>{val}</ButtonStyle>
}

const Container = styled.div`
  overflow: hidden;
`

const Keyboard = () => {
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
        <Button key={'Back'} val={'Back'} />
      </RowStyle>
    </Container>
  )
}

export default Keyboard
