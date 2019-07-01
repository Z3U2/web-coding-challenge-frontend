import React from 'react'
import {getPositionPromise} from '../geo'
import {getNearMe} from '../service'

export default class NearMe extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            location: null,
            shops: null,
            error: ''
        }

        this.getLocation = this.getLocation.bind(this)
        this.updateShops = this.updateShops.bind(this)
        this.updateLocation = this.updateLocation.bind(this)
    }

    async getLocation() {
        let position = await getPositionPromise
        let {
            latitude : lat,
            longitude : lng
        } = position.coords
        let shops = await getNearMe(lat,lng)
        this.updateShops(shops)
    }

    updateShops(shops) {
        this.setState({shops})
    }

    updateLocation(lat,lng) {
        this.setState({location : {
            lat,
            lng
        }})
    }

    componentDidMount() {
        this.getLocation()
        .catch(err => {
            this.setState({error : err.message})
        })
    }

    render() {

        const error = this.state.error
        const shops = this.state.shops

        return (
            <div>
                { shops && <ul>
                    {
                        shops.map(shop => (
                            <li key={shop._id}>
                                Name : {shop.name}, Distance : {shop.dist}
                            </li>
                        ))
                    }
                </ul>}
                {
                    error && <p>
                        {error}
                    </p>
                }
            </div>
        )
    }
}