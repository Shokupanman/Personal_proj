import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Companies from './Components/Companies/Companies'
import Dash from './Components/Dash/Dash'
import Schools from './Components/Schools/Schools'
import ToDo from './Components/ToDo/ToDo'
import Login from './Components/Login,Logout,&Register/Login'
import Register from './Components/Login,Logout,&Register/Register'
import Coffee from './Components/Coffee/Coffee'

export default (
  <Switch>
    <Route exact path="/" component={Login}></Route>
    <Route path="/dashboard" component={Dash}></Route>
    <Route path="/companies" component={Companies}></Route>
    <Route path="/schools" component={Schools}></Route>
    <Route path="/todo" component={ToDo}></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/coffee" component={Coffee} />
  </Switch>
)
