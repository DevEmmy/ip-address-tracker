import React from 'react'

import { MapContainer, Marker, Popup, TileLayer  } from 'react-leaflet'



function MapComponent(props) {
    const position = [51.505, -0.09]
    console.log(props.ip_location[0].location.lat)
    return (
        <div>
    
    <MapContainer center={[props.ip_location[0].location.lat, props.ip_location[0].location.lng]} zoom={13} scrollWheelZoom={false}>
        
  <TileLayer

    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[props.ip_location[0].location.lat, props.ip_location[0].location.lng]}>
    <Popup>
    {props.ip_location[0].location.country },{props.ip_location[0].location.city }, {props.ip_location[0].location.region }, { props.ip_location[0].isp}
    </Popup>
  </Marker>
</MapContainer>
        </div>
    )
}

export default MapComponent
