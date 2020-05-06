import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Register from './pages/register'
import Login from './pages/login'

const UnauthenticatedApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
      </Router>
  )
}
export default UnauthenticatedApp
