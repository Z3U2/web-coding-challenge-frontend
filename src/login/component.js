import React from 'react'
import { Redirect } from 'react-router-dom'

export default class LogIn extends React.Component {

    constructor(props) {
        super(props)
        this.setUser = this.props.setUser
        this.login = this.login.bind(this)
    }

    async login() {
        this.setUser({
            email: "test@example.com"
        })
    }

    render() {

        const { from } = this.props.location.state || { from: { pathname: '/' } }

        if (this.props.user) {
            return <Redirect to={from} />
        }

        return (
            <div>
                <button onClick={this.login}>
                    LogIn
                </button>
            </div>
        )
    }
}