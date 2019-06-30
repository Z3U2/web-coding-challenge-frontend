import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import ProtectedRoute from './components/protectedRoute'
import Header from './components/header'

import LogIn from './login/component'
import SignUp from './signup/component'
import NearMe from './nearme/component'
import Pref from './pref/component'
import Home from './home/component'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
    }

    this.setUser = this.setUser.bind(this)
  }

  async setUser(user) {
    this.setState(prevState => ({ user }))
  }

  render() {
    return (
      <Router>
        <Header user={this.state.user} />
        <Switch>
          <ProtectedRoute path="/nearme/" exact user={this.state.user} component={NearMe} />
          <ProtectedRoute path="/prefs/" exact user={this.state.user} component={Pref} />
          <Route path="/" exact component={Home}/>
          <Route path="/login/" exact component={(props) => (<LogIn user={this.state.user} setUser={this.setUser} {...props} />)} />
          <Route path="/signup/" exact component={SignUp} />
          <Route render={() => (
            <div>
              404 Not Found
          </div>
          )} />
        </Switch>
      </Router>
    )
  }

}

export default App;
