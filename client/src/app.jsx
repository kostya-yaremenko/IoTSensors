import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/header'
import { MainContainer, UserContainer } from './containers'
import { ThemeProvider } from 'styled-components'
import { theme } from './_styles/theme'
import './_styles'

const App = () =>
  <ThemeProvider theme={theme} >
    <BrowserRouter>
      <Fragment>
        <Header/>
        <Switch>
          <Route exact path = '/' component={MainContainer} />
          <Route path = '/user' component={UserContainer} />
          <Route path = '*' render={() => <Redirect to='/' />} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  </ThemeProvider>

export default App
