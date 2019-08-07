import { GoogleComponent } from 'react-google-location'
import React, { Component } from 'react';

const API_KEY = "AIzaSyB35vKiFzIZiLxChMGZnZLP8XPsicn6joI"

class HomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            place: null,
        };
    }

    render() {
        console.warn('result:', this.state.place)
        return (
            <div >
                <GoogleComponent
                    apiKey={API_KEY}
                    language={'en'}
                    country={'country:in|country:us'}
                    coordinates={true}
                    // locationBoxStyle={'custom-style'}
                    // locationListStyle={'custom-style-list'}
                    onChange={(e) => { this.setState({ place: e }) }} 
                    />
            </div>

        )
    }
}

export default HomeComponent;