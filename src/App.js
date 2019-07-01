import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { getMe } from './service'

import ProtectedRoute from './components/protectedRoute'
import Layout from './components/layout'

import LogIn from './login/component'
import Home from './home/component'
import SignOut from './signout/component'

const SignUp = React.lazy(() => import('./signup/component'))
const NearMe = React.lazy(() => import('./nearme/component'))
const Pref = React.lazy(() => import('./pref/component')) 

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

  componentDidMount() {
    getMe()
      .then(data => {
        this.setUser({
          email: data.email
        })
      })
      .catch(e => {
        this.setState({ error: e.message })
      })
  }

  render() {
    return (
      <Router>
        <Layout user={this.state.user}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <ProtectedRoute path="/nearme/" exact user={this.state.user} component={NearMe} />
              <ProtectedRoute path="/prefs/" exact user={this.state.user} component={Pref} />
              <ProtectedRoute path="/signout/" exact user={this.state.user} component={(props) => <SignOut user={this.state.user} setUser={this.setUser} {...props} />} />
              <Route path="/" exact component={Home} />
              <Route path="/login/" exact component={(props) => (<LogIn user={this.state.user} setUser={this.setUser} {...props} />)} />
              <Route path="/signup/" exact component={SignUp} />
              <Route render={() => (
                <div>
                  404 Not Found
                </div>
              )} />
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    )
  }

}

export default App;
