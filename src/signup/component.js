import React from 'react'
import { Redirect } from 'react-router-dom'
import './style.css'

import { doSignUp, getLogin } from '../service'

import ErrorComp from '../components/error'

export default class LogIn extends React.Component {

    constructor(props) {
        super(props)
        this.setUser = this.props.setUser
        this.signup = this.signup.bind(this)
        this.state = {
            email: '',
            password: '',
            passwordConfirmation: '',
            error: '',
            disabled: true,
        }
    }

    async signup(e) {
        e.preventDefault()
        try {
            let email = this.state.email
            let password = this.state.password
            await doSignUp(email, password)
            await getLogin(email, password)
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

    handleConfirmation = (e) => {
        let field = e.target.getAttribute('name')
        let value = e.target.value
        let pass = document.getElementById('exampleInputPassword1').value
        if (pass !== value) {
            this.setState(prevState => {
                prevState[field] = value
                prevState.error = 'Passwords do not match'
                prevState.disabled = true
                return prevState
            });
        } else {
            this.setState(prevState => {
                prevState[field] = value
                prevState.error = ''
                prevState.disabled = false
                return prevState
            }); 
        }
    }

    render() {

        const { from } = this.props.location.state || { from: { pathname: '/' } }

        if (this.props.user) {
            return <Redirect to={from} />
        }

        return (
            <div className="login-parent">
                <form action="" onSubmit={this.signup}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            aria-describedby="emailHelp"
                            placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            id="exampleInputPassword1"
                            placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password Confirmation</label>
                        <input
                            type="password"
                            className="form-control"
                            name="passwordConfirmation"
                            value={this.state.passwordConfirmation}
                            onChange={this.handleConfirmation}
                            id="exampleInputPasswordConfirmation1"
                            placeholder="Password Confirmation" />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled = {this.state.disabled}
                    >Sign Up</button>
                </form>
                {this.state.error && <ErrorComp error={this.state.error} />}
            </div>
        )
    }
}