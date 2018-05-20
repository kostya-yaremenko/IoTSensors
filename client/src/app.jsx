import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './_styles/theme'
import './_styles'

const App = () =>
  <ThemeProvider theme={theme} >
    <span>
      React app
    </span>
  </ThemeProvider>

export default App
