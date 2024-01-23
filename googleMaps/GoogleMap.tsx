"use client"

import {useEffect, useRef} from'react'
import {Loader } from '@googlemaps/js-api-loader'

const Map = ( ) => {

    const mapRef = useRef<HTMLDivElement>(null)


    useEffect(() => {

        const initMap = async () => {
            
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
                version:'weekly'
            })

            const { Map } = await loader.importLibrary('maps');

            const {Marker} = await loader.importLibrary('marker') as google.maps.MarkerLibrary

            const position = {
                lat: 33.969417572021484,
                lng: -84.26190185546875
            }

            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom:15,
                mapId: 'DEMO_MAP_ID',
               
            }

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions)

            const marker = new Marker({
                map:map,
                position:position
            })
        }
        initMap();

    })

    return (
        <div style ={{height:'600px'}} ref={mapRef}/>
          
       
    )
}

export default Map