import React, { useContext } from 'react'
import styled from 'styled-components'
import { BoardState } from '../context/gameContext'

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
`

const BoardStyle = styled.div`
  width: 100%;
  max-width: 25rem;
`

const Letter = ({ letter }) => {
  return <LetterStyle>{letter}</LetterStyle>
}

const Row = ({ rowVals }) => {
  return (
    <RowStyle>
      {rowVals.map((item, idx) => (
        <Letter key={idx} letter={item} />
      ))}
    </RowStyle>
  )
}

const Board = () => {
  const [boardState, setBoardState] = useContext(BoardState)
  return (
    <BoardStyle>
      {boardState.map((rowVals, idx) => (
        <Row key={idx} rowVals={rowVals} />
      ))}
    </BoardStyle>
  )
}

export default Board
