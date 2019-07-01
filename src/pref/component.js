import React from 'react'
import { getPrefs,deletePref } from '../service'
import './style.css'

import Shop from '../components/shop'

export default class Pref extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            prefs: null,
            error : ''
        }

        this.remove = this.remove.bind(this)
    }

    componentDidMount() {
        getPrefs().then(
            prefs => {
                this.setState({ prefs })
            }
        )
    }

    async remove (e,id) {
        try {
            e.preventDefault()
            await deletePref(id)
            let prefs = await getPrefs()
            this.setState({ prefs })
        } catch (err) {
            this.setState({ error: err.message })
        }
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
                                        onClick={e => this.remove(e,pref._id)}>
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