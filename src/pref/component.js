import React from 'react'
import { getPrefs } from '../service'

export default class Pref extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            prefs: null
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

        return (
            <div>
                {prefs &&
                    <ul>
                        {prefs.map(pref => {
                            return (
                                <li key={pref._id}>{pref.name}</li>
                            )
                        })}
                    </ul>}
            </div>
        )
    }
}