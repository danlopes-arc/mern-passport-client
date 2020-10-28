import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import MyInfo from './components/auth/MyInfo'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/myinfo" component={MyInfo} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
