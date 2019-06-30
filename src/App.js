import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import LogIn from './login/component'
import SignUp from './signup/component'
import NearMe from './nearme/component'
import Pref from './pref/component'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
    }
  }

  async login() {
    this.setState(prevState => ({ user: { email: "test@example.com" } }))
  }

  async logout() {
    this.setState(prevState => ({ user: null }))
  }

  render() {
    return (
      <Router>
        <Route path="/" exact component={NearMe} />
        <Route path="/prefs/" component={Pref} />
        <Route path="/login/" component={LogIn} />
        <Route path="/signup/" component={SignUp} />
      </Router>
    )
  }

}

export default App;
