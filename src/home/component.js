import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default class Home extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <i class="fas fa-map-marker-alt"></i>
                <div class="welcome-text">
                    <h1 className="display-4">Welcome to ShopList App !</h1>
                    <p className="lead">You can start browsing shops nearby.</p>
                </div>
                {/* <hr className="my-4" /> */}
                <p>In a short while you'll be able to discover shops near you, 
                    and like them so we can save them for you !</p>
                <Link className="btn btn-primary btn-lg" to='/nearme' role="button">Go !</Link>
            </div>
        )
    }
}