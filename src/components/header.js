import React from 'react'
import { Link } from "react-router-dom";

export default class Header extends React.Component {

    render() {

        if (this.props.user) {
            return (
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to="/">Sh<i class="fas fa-map-marker-alt"></i>pList</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item"> 
                            <Link className="nav-link" to="/nearme">Shops Near Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/prefs/">My Preferred Shops</Link>
                        </li>
                    </ul>
                    <span className="ml-auto">Logged in as : {this.props.user.email}</span>
                    <ul className="navbar-nav">
                        <Link className="nav-link" to="/signout/">Sign Out</Link>
                    </ul>
                    
                </nav>
            )
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-light" >
                <Link className="navbar-brand" to="/">Sh<i class="fas fa-map-marker-alt"></i>pList</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login/">Log In</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup/">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}