import React from 'react'
import { Redirect } from 'react-router-dom'

import { getLogin } from '../service'

export default class LogIn extends React.Component {

    constructor(props) {
        super(props)
        this.setUser = this.props.setUser
        this.login = this.login.bind(this)
        this.state = {
            email : '',
            password : '',
            error: '',
        }
    }

    async login() {
        try {
            await getLogin(this.state.email,this.state.password)
            this.setUser({
                email: this.state.email
            })
        }
        catch (e) {
            this.setState({ error: e.message })
        }
    }

    handleChange = (e) => {
        let field = e.target.getAttribute('name')
        let value = e.target.value
        this.setState(prevState => {
            prevState[field] = value
            return prevState
        });
    }

    render() {

        const { from } = this.props.location.state || { from: { pathname: '/' } }

        if (this.props.user) {
            return <Redirect to={from} />
        }

        return (
            <div>
                <label>Email</label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                <br/>
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <br/>
                <button onClick={this.login}>
                    LogIn
                </button>
                {this.state.error && <p>{this.state.error}</p> }
            </div>
        )
    }
}