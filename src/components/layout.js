import React from 'react'

import Header from './header'
import Footer from './footer'

export default class Layout extends React.Component {

    render() {

        return (
            <div>
                <Header user = {this.props.user}/>
                <div className="container content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}