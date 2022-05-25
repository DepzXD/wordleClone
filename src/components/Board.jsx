import React, { useContext } from 'react'
import styled from 'styled-components'
import { BoardState, BoardUIContext } from '../context/gameContext'

const RowStyle = styled.div`
  display: flex;
`
const LetterStyle = styled.div`
  display: flex;
  border: 2px solid ${(props) => props.theme.darkGray};
  font-size: 2rem;
  font-weight: 700;
  margin: 0.2em;
  width: 20%;
  height: 4rem;
  max-height: 4.5rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.isEmpty && 'back'};
  background-color: ${(props) => props.isInCorrect && props.theme.darkGray};
  background-color: ${(props) =>
    props.isPartallyCorrect && props.theme.partiallyCorrect};
  background-color: ${(props) => props.isCorrect && props.theme.correct};
`

const BoardStyle = styled.div`
  width: 100%;
  max-width: 25rem;
`

const Letter = ({ letter, state }) => {
  let empty = false
  let isCorrect = false
  let isPartallyCorrect = false
  let isInCorrect = false
  if (state == 'Empty') {
    empty = true
  }
  if (state == 'Yes') {
    isCorrect = true
  }
  if (state == 'No') {
    isInCorrect = true
  }
  if (state == 'InWord') {
    isPartallyCorrect = true
  }
  return (
    <LetterStyle
      isEmpty={empty}
      isCorrect={isCorrect}
      isPartallyCorrect={isPartallyCorrect}
      isInCorrect={isInCorrect}
    >
      {letter}
    </LetterStyle>
  )
}

const Row = ({ rowVals, state }) => {
  return (
    <RowStyle>
      {rowVals.map((item, idx) => (
        <Letter key={idx} state={state[idx]} letter={item} />
      ))}
    </RowStyle>
  )
}

const Board = () => {
  const [boardState, setBoardState] = useContext(BoardState)
  const [boardUiState, setBoardUiState] = useContext(BoardUIContext)
  return (
    <BoardStyle>
      {boardState.map((rowVals, idx) => (
        <Row key={idx} state={boardUiState[idx]} rowVals={rowVals} />
      ))}
    </BoardStyle>
  )
}

export default Board
