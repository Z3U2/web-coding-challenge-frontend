import React from 'react'
import {getPositionPromise} from '../geo'
import {getNearMe, addPref} from '../service'
import './style.css'

import Shop from '../components/shop'

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
                { shops && <div className="row">
                    {
                        shops.map(shop => (
                            <div key={shop._id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                <Shop {...shop} >
                                    <button
                                        className="btn btn-primary like-dislike"
                                        style={{ float: 'right' }}
                                        onClick={null}>
                                        Like
                                    </button>
                                    <button
                                        className="btn btn-danger like-dislike"
                                        style={{ float: 'left' }}
                                        onClick={null}>
                                        Dislike
                                    </button>
                                </Shop>
                            </div>
                        ))
                    }
                </div>}
                {
                    error && <p>
                        {error}
                    </p>
                }
            </div>
        )
    }
}