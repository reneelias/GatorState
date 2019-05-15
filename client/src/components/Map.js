import React, {Component} from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import Geocode from 'react-geocode';

const mapStyles = {
    height: '100%',
};

Geocode.setApiKey("AIzaSyBe7J1RZpb8hX6N1zpT43hn9LvAnrx2o2k");

// Geocode.fromAddress("Los Angeles").then(
//     response => {
//       const { lat, lng } = response.results[0].geometry.location;
//       console.log(lat, lng);
//     },
//     error => {
//       console.error(error);
//     }
// );
export class MapContainer extends Component{
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectPlace: {},
        latS: 37.7219,
        lngS: -122.4782,
        authenticationState: 'DEFAULT',
    };
    //Used to show the info window pop up which is from 
    //the google-maps-react library

    onMarkerClick = (props,marker,e) =>
    this.setState({
        selectPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });
    //Closing the infowindow once a user clicks on the close button
    onClose = props => {
        if (this.state.showingInfoWindow){
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }

    componentDidMount(){
        this.getGeoLoc();
    }

    getGeoLoc = address => {
        console.log('Address:');
        console.log(this.props.address);
            Geocode.fromAddress(`${this.props.address}`).then(
            response => {
                console.log("response");
                console.log(response.results);
              const { lat, lng } = response.results[0].geometry.location;
              this.setState({
                 latS: lat,
                 lngS: lng,
                 authenticationState: 'AUTHENTICATED'
              });
              
              console.log(lat, lng);
            },
            error => {
              console.error(error);
            }
        );
    };

    render(){
        return(
            <div>
                {this.state.authenticationState === 'AUTHENTICATED' && 
            <Map 
                google= {this.props.google}
                zoom={12}
                style={mapStyles}
                //Initial coordinates are set to SFSU
                initialCenter={{
                    lat: this.state.latS,
                    lng: this.state.lngS
                }}
            >
            {/*When a marker is clicked it will display the address of what was clicked */}
                <Marker
                    onClick={this.onMarkerClick}
                    position={this.props.location}
                    name={'San Francisco State University'}
                />
            {/*Info window displays address for marker when its clicked*/}
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
                }
            </div>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyBe7J1RZpb8hX6N1zpT43hn9LvAnrx2o2k'
})(MapContainer);