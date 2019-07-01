import React from 'react'
import { Redirect, Route } from "react-router-dom";

export default class ProtectedRoute extends React.Component {


    render() {

        let {
            component : Component,
            user,
            ...rest
        } = this.props

        if (this.props.path === '/signout/') {
            return (
                <Route {...rest} render={(props) => (
                    user !== null
                        ? <Component {...props} />
                        : <Redirect to={{
                            pathname: '/',
                            state: {
                                from: props.location
                            }
                        }} />
                )} />
            )
        }

        return (
            <Route {...rest} render={(props) => (
                user !== null
                ? <Component {...props} />
                    : <Redirect to={{
                        pathname: '/login/',
                        state: {
                            from: props.location
                        }
                    }} />
            )} />
        )
    }
}