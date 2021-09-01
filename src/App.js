import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Movie from './components/Movie'
import NotFound from './components/NotFound'

//Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//Style
import { GlobalStyle } from './GlobalStyle'

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path='/' exact>
        {' '}
        <Home />{' '}
      </Route>
      <Route path='/:movieId'>
        <Movie />
      </Route>
      <Route path='/*'>
        <NotFound />
      </Route>
    </Switch>
    <GlobalStyle />
  </Router>
)

export default App
