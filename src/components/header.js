import React from 'react'
import { Link } from "react-router-dom";

export default class Header extends React.Component {

    render() {

        if (this.props.user) {
            return (
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/nearme">Shops Near Me</Link>
                        </li>
                        <li>
                            <Link to="/prefs/">My Preferred Shops</Link>
                        </li>
                    </ul>
                </nav>
            )
        }

        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login/">Log In</Link>
                    </li>
                    <li>
                        <Link to="/signup/">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}