import React, { Component } from 'react';
// googlemaps api is already included as script in index.html

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }
    
    render() {
        // to access this div from anywhere in this component -> this.refs.map
        return <div ref="map" />;
    }
}

export default GoogleMap;