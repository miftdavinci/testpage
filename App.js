import React, { Component } from 'react';
// import HEREMap, { Marker } from 'react-here-maps';
import HEREMap, { Marker, Circle } from "react-here-maps";

export default class Map extends Component {
    render() {
        // const center = { lat: 110.3398252, lng: -7.803164 };
        const center = { lat: -7.803164, lng: 110.3398252 };
    
        return (
            <HEREMap
               appId="zi4r1zJ63ZOYajoRMeoG"
                appCode="XN7OA1ChBzeVB_7UhQRFXw"
               center={center}
               zoom={14}
               hidpi={true}
           >
               <Marker {...center}>
                   <div  class='circle-marker' style={{color:'blue'}} />
               </Marker>
               <Circle
                   {...center}
                   strokeColor="#1275E8"
                   fillColor="rgba(212, 92, 91, 0.2)"
                   lineWidth={2}
                   radius={100}
               />
           </HEREMap>
        )
    }
}