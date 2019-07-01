import React from 'react'
import { getPrefs } from '../service'

export default class NearMe extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            prefs : null
        }
    }

    componentDidMount() {
        getPrefs().then(
            prefs => {
                this.setState({prefs})
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
                            <li>{pref.name}</li>
                        )
                    })}
                </ul>}
            </div>
        )
    }
}