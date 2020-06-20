import React from 'react'
import { Route, Redirect, Switch } from "react-router-dom"
// import Header from "../components/Header"
import Home from "../components/home"
import Login from "../components/login"
import Register from "../components/register"

export default (
    <div>

        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/index" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
        </Switch>
    </div>
)