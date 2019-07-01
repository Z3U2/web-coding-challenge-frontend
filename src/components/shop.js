import React from 'react'

export default class Shop extends React.Component {

    async like() {

    }

    async dislike() {

    }

    render() {

        const {
            name,

        } = this.props

        return (
            <div className="card shop">
                <div className="container">
                    <div className="card-title-wrapper">
                        <h5 className="card-title">{name}</h5>
                    </div>
                    <img src="https://picsum.photos/200/300" className="card-img-top" alt={name + " picture"} />
                    <div className="card-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}