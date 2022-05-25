import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  BoardState,
  BoardUIContext,
  GameState,
  WordList,
} from '../context/gameContext'
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
  wordToGuess: '',
}

const defaultBoardUiState = [
  ['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
  ['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
  ['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
  ['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
  ['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
  ['Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
]

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const Game = () => {
  const [boardState, setBoardState] = useState(defaultBoard)
  const [gameState, setGameState] = useState(defaultGameState)
  const [boardUiState, setBoardUiState] = useState(defaultBoardUiState)
  const [wordList, setWordList] = useState({})

  useEffect(() => {
    const url =
      'https://raw.githubusercontent.com/charlesreid1/five-letter-words/master/sgb-words.txt'
    fetch(url).then(function (response) {
      response.text().then(function (text) {
        let lst = text.split('\n')
        setWordList(new Set(lst))
        let game = { ...gameState }
        game.wordToGuess = lst[getRndInteger(0, 200)]
        setGameState(game)
      })
    })
  }, [])
  return (
    <Container>
      <GameState.Provider value={[gameState, setGameState]}>
        <WordList.Provider value={[wordList, setWordList]}>
          <BoardState.Provider value={[boardState, setBoardState]}>
            <BoardUIContext.Provider value={[boardUiState, setBoardUiState]}>
              <Board />
              <Keyboard />
            </BoardUIContext.Provider>
          </BoardState.Provider>
        </WordList.Provider>
      </GameState.Provider>
    </Container>
  )
}
export default Game
