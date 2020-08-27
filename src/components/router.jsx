import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './home'
import Movies from './movies'

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
    </Switch>
  )
}

export default Router
