import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login';
import Highlights from './Components/Community Highlights/Highlights'


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/highlights' component={Highlights} />
    </Switch>
)