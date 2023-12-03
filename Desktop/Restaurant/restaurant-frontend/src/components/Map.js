import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import './Map.css';

const containerStyle = {
    width: '400px',
    height: '400px',
    margin: 'auto'
  };
  

const Map = ({ location }) => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBKjKJVksq2zaNBiuXDSvXZswaGK0FgnG0" 
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map);

