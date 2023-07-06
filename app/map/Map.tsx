import React, {useRef, useState} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
// import mapboxgl from "mapbox-gl";
import ReactMapGL, { Marker, MapLayerMouseEvent, MapRef, MapboxStyle, ViewStateChangeEvent, MapboxGeoJSONFeature } from 'react-map-gl';
import { placePoints } from './data';
import bbox from '@turf/bbox';
import MAP_STYLE from './mapStyle';

interface Props {
  clubClicked: any
  currentClub: number[][]
}


export default function MapView({ clubClicked, currentClub }: Props) {
  
  const [viewState, setViewState] = React.useState({
    longitude: 149.1079,
    latitude: -35.321,
    zoom: 10.2
  });

  const mapRef = useRef<MapRef| null>(null);

  const [iconSize, setIconSize] = useState(10);
  var iconFormat: string = "h-" + iconSize + " w-" + iconSize;
  // console.log(iconFormat);

  const handleMove = (e: ViewStateChangeEvent) => {
    setViewState(e.viewState);
    
    
    const zoom = e.viewState.zoom;
    // console.log(zoom);
    // console.log(iconSize);
    
    if (zoom < 10)      setIconSize(10);
    else if (zoom < 11) setIconSize(12);
    else if (zoom < 12) setIconSize(14);
    else if (zoom < 13) setIconSize(14);
    else if (zoom < 14) setIconSize(40);
    else if (zoom < 15) setIconSize(40);
    else if (zoom < 16) setIconSize(40);
    else if (zoom < 17) setIconSize(48);
    // else setIconSize(8);
    
    
  }


  // const onClick = (coo: Array<Array<number>>) => {
  //   const test = bbox(coo);
  //   console.log(coo)
  //   console.log(test)

  //   if (!mapRef.current) return;
  //   mapRef.current.fitBounds(
  //     [
  //       [test[0], test[1]],
  //       [test[2], test[3]]
  //     ],
  //     {padding: 40, duration: 500}
  //   );


  // }

  const onClick = (e: MapLayerMouseEvent) => {
    if (e.features == undefined) return;
    if (e.features[0] == undefined) return;
    if (e.features[0].properties == undefined) return;

    console.log(e.features[0]);

    const feature = e.features[0];
    if (feature) {
      // calculate the bounding box of the feature
      const [minLng, minLat, maxLng, maxLat] = bbox(feature);
      const test = bbox(feature);

      console.log({test})

      if (!mapRef.current) return;
      mapRef.current.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat]
        ],
        {padding: 40, duration: 500}
      );
    }
  };




  return (
    <div className="map-container place-self-center h-screen w-full">
      <ReactMapGL
        ref={mapRef}
        // initialViewState={{
        //   longitude: 149.1079,
        //   latitude: -35.321,
        //   zoom: 10.2,
        // }}
        {...viewState}
        onMove={evt => handleMove(evt)}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        interactiveLayerIds={["clubAreas-fill"]}
        onClick={(e: MapLayerMouseEvent) => {
          clubClicked(e);
          onClick(e)
          // onClick(currentClub)
        }}
        mapStyle={MAP_STYLE as MapboxStyle}
      >
        {placePoints.features.map((club) => (
          <Marker
            key={club.id}
            longitude={club.geometry.coordinates[0]}
            latitude={club.geometry.coordinates[1]}
            onClick={() => clubClicked(club.id)}
            scale={5}
            // icon-size={0.1}
            // icon-scale={['interpolate', ['linear'], ['zoom'], 15, 0.0015, 23, 0.2]}
          >
            <div
              className={iconFormat}
              // className='h-14 w-14'
            >
              <img
                src={"/images/clubLogos/" + club.properties.logoImg}
              />
            </div>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}




