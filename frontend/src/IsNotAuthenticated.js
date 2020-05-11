import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Register from './pages/register'
import Login from './pages/login'
import Home from './pages/home'
import Teste from './pages/teste'

const IsNotAuthenticated = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home}/>
        <Route exact path='/teste' component={Teste}/>
        </Switch>
    </Router>
  )
}
export default IsNotAuthenticated
