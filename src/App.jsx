import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Theme } from './components/styles/GlobalStyles'
import Header from './components/Header'
import Game from './components/Game'

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Game />
    </ThemeProvider>
  )
}

export default App
