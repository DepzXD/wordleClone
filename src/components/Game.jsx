import React, { useState } from 'react'
import styled from 'styled-components'
import { BoardState, GameState } from '../context/gameContext'
import Board from './Board'
import Keyboard from './Keyboard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(90%, 70rem);
  align-items: center;
  justify-items: center;
  margin: 0;
  margin-top: 4rem;
  margin-inline: auto;
  justify-content: space-between;
  height: calc(92vh - 4rem);
`
const defaultBoard = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
]

const defaultGameState = {
  isOver: false,
  currentRow: 0,
  currentColumn: 0,
}

const Game = () => {
  const [boardState, setBoardState] = useState(defaultBoard)
  const [gameState, setGameState] = useState(defaultGameState)

  return (
    <Container>
      <GameState.Provider value={[gameState, setGameState]}>
        <BoardState.Provider value={[boardState, setBoardState]}>
          <Board />
          <Keyboard />
        </BoardState.Provider>
      </GameState.Provider>
    </Container>
  )
}
export default Game
