import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  body {
    font-family: "Liberation Sans", "Arial", sans-serif;
    background-color: #121213;
    color: #fff;
    margin: 0;
    padding: 0;
    font-size: 18px;
  }
`
export const Theme = {
  gray: '#818384',
  darkGray: '#3A3A3C',
  correct: '#6aaa64',
  partiallyCorrect: '#c9b458',
  selected: '#3A3A3C',
}
