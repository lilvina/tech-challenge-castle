import React, {Component} from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import Data from '../data/users.json';

const style = {
  margin: '0 auto',
  width: '100%',
  height: '60%'
}

class MapContainer extends Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          style={style}
          zoom={3}
          padding="16%"
        >
        {Data.map((detail, i) => {
          return (
            <Marker
              position={{
                lat: detail.last_location.location.lat,
                lng: detail.last_location.location.lon
              }}
            />
          )
        })}
      </Map>{" "}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ""
})(MapContainer);
