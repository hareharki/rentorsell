import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 44.203438,
  lng: 17.907743
};

function MyComponent() {
  return (
    <LoadScript
      Key="AIzaSyA-Ai-hNJp3apjcIzI9eDY7a1kg4UWhEIUY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)