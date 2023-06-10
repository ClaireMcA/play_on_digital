import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from "mapbox-gl";
import Map, { Marker, Source, Layer } from 'react-map-gl';
import { placePoints } from './data';


interface Props {
  clubClicked: any
}

const layerStyle = {
  id: 'point',
  type: 'fill',
  paint: {
    'fill-color': '#4E3FC8'
  }
};


export default function MapView({clubClicked}: Props) {


  // const handleClick = (id: number) => {
  //   // setcurrentClub(placePoints.features[num]);
  //   console.log(placePoints.features[id - 1]);
  // }

    // const logoImage = 'public/images/clubLogos/belwest.png'
    // const mapContainer = useRef<any>(null); // : Type
    // const map = useRef<mapboxgl.Map | null>(null);
    // const [lng, setLng] = useState<number>(149.1079);
    // const [lat, setLat] = useState<number>(-35.321);
    // const [zoom, setZoom] = useState<number>(10.2);

    // const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN

// console.log(process.env.MAPBOX_TOKEN)

    return (
      <div className="map-container place-self-center h-screen w-full">
      <Map
      
        initialViewState={{
          longitude: 149.1079,
          latitude: -35.321,
          zoom: 10.2
        }}
        // style={{width: 600, height: 400}}
        mapStyle="mapbox://styles/nugmc7/clih0drh7001301pwhkw07bzo"
        // mapboxAccessToken={process.env.MAPBOX_TOKEN}
        mapboxAccessToken='pk.eyJ1IjoibnVnbWM3IiwiYSI6ImNrdXFwMmE0bTR4bDgydW84MTczMzJ4bnQifQ.ELNGQu9bmwasNHuVUZT96w'
      >
      {/* <Marker longitude={149.1079} latitude={-35.321} color="red" /> */}


      {placePoints.features.map(club => (
        <Marker key={club.id}
          longitude={club.geometry.coordinates[0]}
          latitude={club.geometry.coordinates[1]}
          onClick= {() => clubClicked(club.id)}>


          <img className="h-8 w-8" src={'/images/clubLogos/' + club.properties.logoImg}/>  
        </Marker>)
      )}

    {/* <Source id="my-data" type="geojson" data={placeAreas}>
      <Layer {...layerStyle} />
    </Source> */}


      </Map>
      </div>
    );
}




