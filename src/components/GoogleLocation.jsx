import PropTypes from "prop-types";
import React, { Component } from "react";
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGooglePlacesSuggest from "react-google-places-suggest";
import { AsyncStorage } from 'AsyncStorage';

const API_KEY = "AIzaSyB35vKiFzIZiLxChMGZnZLP8XPsicn6joI"
class GoogleSuggest extends Component {
    state = {
        search: "",
        value: "",
    }

    handleInputChange = (e) => {
        this.setState({ search: e.target.value, value: e.target.value })
    }

    handleSelectSuggest = (suggest) => {
        this.setState({ search: "", value: suggest.formatted_address })
    }

    render() {
        const { search, value } = this.state
        AsyncStorage.setItem("location", value);
        return (
            <ReactGoogleMapLoader
                params={{
                    key: API_KEY,
                    libraries: "places,geocode",
                }}
                render={googleMaps =>
                    googleMaps && (
                        <div>
                            <ReactGooglePlacesSuggest
                                autocompletionRequest={{ input: search }}
                                googleMaps={googleMaps}
                                onSelectSuggest={this.handleSelectSuggest}
                            >
                                <input
                                    type="text"
                                    value={value}
                                    className="form-control"
                                    placeholder="Search a location"
                                    onChange={this.handleInputChange}
                                />
                            </ReactGooglePlacesSuggest>
                        </div>
                    )
                }
            />
        )
    }
}

GoogleSuggest.propTypes = {
    googleMaps: PropTypes.object,
}

export default GoogleSuggest



// import { GoogleComponent } from 'react-google-location'
// import React, { Component } from 'react';

// const API_KEY = "AIzaSyB35vKiFzIZiLxChMGZnZLP8XPsicn6joI"

// class HomeComponent extends Component {
//         state = {
//             place: null,
//         };
    
//     render() {
//         console.warn('result:', this.state.place)
//         return (
//             <div >
//                 <GoogleComponent
//                     apiKey={API_KEY}
//                     language={'en'}
//                     country={'country:ng'}
//                     coordinates={true}
//                     onChange={(e) => { this.setState({ place: e }) }} 
//                     />
//             </div>
//         )
//     }
// }

// export default HomeComponent;

// // console.log(`longitude: ${lng} | latitude: ${lat}`);