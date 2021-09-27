import React from 'react'
import "./Home.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Register from '../register/Register'
import Login from '../login/Login'

import Header from '../header/Header'

function Home() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Header}/>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default Home
