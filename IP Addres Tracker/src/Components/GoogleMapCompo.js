import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'


const Map = ()=>{
    return(
        <GoogleMap defaultZoom={10} defaultCenter={{lat:45.3435, lng: -75}} />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function GoogleMapCompo() {
    return (
        <div>
            <WrappedMap googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBWhDLGdWZZWGO7PKxlpLgAmfmeIVVOsy0"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px`, marginTop:`120px`, zIndex:`99` }} />}
  mapElement={<div style={{ height: `100%` }} />}/>
        </div>
    )
}

export default GoogleMapCompo
