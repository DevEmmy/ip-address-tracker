import React, {useRef, useState} from 'react'
import {} from 'react-leaflet'
import GoogleMap from './GoogleMapCompo';
import MapComponent from './MapComponent';


const Header = ()=>{

    const [ loc, setLoc ]= useState()
    const [map, showMap] = useState(false)

    const API_KEY = process.env.REACT_APP_API_KEY
    const ipRef = useRef(null)

    console.log(process.env.REACT_APP_API_KEY)

    const getLocation =async (e)=> {
        e.preventDefault()
        const Ip = ipRef.current.value
        const api_call = await fetch(`https://geo.ipify.org/api/v1?apiKey=${ API_KEY }&ipAddress=${Ip}`)
        const location = await api_call.json();
        console.log(location)
        setLoc([location])
        console.log(loc)
    }
    return(
        <div>
            <div className='header'>
                <h2>IP Address Tracker</h2>

                <form>
                    <input type="text" ref = {ipRef}/>
                    <button type="submit" onClick={ getLocation}> Search </button>
                </form>

                <div>
                    { loc?.map((location)=>{

                        return(
                            <div key = {location.ip}  className="location_data">

                            { location.location ? <>
                                <div className="ip_container content ">
                                    <h6> IP ADDRESS </h6>
                                    <p>{location.ip}</p>
                                </div>

                                <div className="location content">
                                    <h6>LOCATION</h6>
                                    <p>{ location.location?.country}, { location.location?.city}, {location.location?.region}</p>
                                </div> 

                                <div className="time_zone content">
                                    <h6>TIMEZONE</h6>
                                    <p>{ location.location?.timezone }</p>
                                </div>
                                </> : location.messages

                    }
                            </div>
                            
                        )
                    })}
                </div>
                   {loc && loc[0].location &&   
                  <div className="btn" onClick={()=>showMap(true)}>
                      View Map
                  </div>} 
            </div>
            

                

            

            { map &&<> <MapComponent ip_location = {loc && loc}/> <div className='darklayout' onClick={()=>showMap(false)}/> </>}
            
        </div>
    )
}

export default Header


