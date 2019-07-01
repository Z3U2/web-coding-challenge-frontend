import React from 'react'

import { getLogout } from '../service'

import ErrorComp from '../components/error'

export default class SignOut extends React.Component {

    constructor(props) {
        super(props)
        this.setUser = this.props.setUser
        this.login = this.login.bind(this)
        this.state = {
            email: '',
            password: '',
            error: '',
        }
    }

    async login(e) {
        e.preventDefault()
        try {
            await getLogout()
            this.setUser(null)
        }
        catch (e) {
            this.setState({ error: e.message })
        }
    }

    render() {

        return (
            <div>
                <form action="" onSubmit={this.login}>
                    <p>
                        You are logged in as : {this.props.user.email}, Are you sure you want to sign out ?
                    </p>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >Sign Out</button>
                </form>
                {this.state.error && <ErrorComp error={this.state.error} />}
            </div>
        )
    }
}