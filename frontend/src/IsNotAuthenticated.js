import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Register, Login, Home, Teste } from './pages/index'

const IsNotAuthenticated = () => (
  <Router>
    <Switch>
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/' component={Home} />
      <Route exact path='/teste' component={Teste} />
    </Switch>
  </Router>
)

export default IsNotAuthenticated
