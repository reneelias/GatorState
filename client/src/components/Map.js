import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const Marker = ({text}) => <div>{}</div>


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.7219,
      lng: -122.4782
    },
    zoom: 12
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBe7J1RZpb8hX6N1zpT43hn9LvAnrx2o2k' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={37.7219}
            lng={-122.4782}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;