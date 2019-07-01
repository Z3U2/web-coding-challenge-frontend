import React from 'react'
import { getPrefs } from '../service'
import './style.css'

import Shop from '../components/shop'

export default class Pref extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            prefs: null,
            error : ''
        }
    }

    componentDidMount() {
        getPrefs().then(
            prefs => {
                this.setState({ prefs })
            }
        )
    }

    render() {

        const prefs = this.state.prefs
        const error = this.state.error

        return (
            <div>
                {prefs && <div className="row">
                    {
                        prefs.map(pref => (
                            <div key={pref._id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                <Shop  {...pref}>
                                    <button
                                        className="btn btn-danger"
                                        onClick={null}>
                                        Remove
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