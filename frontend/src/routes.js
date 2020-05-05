import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import subMenu from './pages/subMenu/index'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={subMenu} />
            </Switch>
        </BrowserRouter>
    )
}