import React, {useRef} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
// import mapboxgl from "mapbox-gl";
import Map, { Marker, Source, Layer, FillLayer, MapLayerMouseEvent, MapRef, MapboxStyle } from 'react-map-gl';
import { placePoints, placeAreas } from './data';
import bbox from '@turf/bbox';
import MAP_STYLE from './mapStyle';

interface Props {
  clubClicked: any
}


// const dataLayer: FillLayer = {
//   id: 'data',
//   type: 'fill',
//   paint: {
//     'fill-color': ['get', 'color'],
//     // 'fill-color': '#4E3FC8',
//     'fill-opacity': 0.4
//   },
// };

// const fillLayer: FillLayer = {
//   id: 'sf-neighborhoods-fill',
//   source: 'sf-neighborhoods',
//   type: 'fill',
//   paint: {
//     'fill-outline-color': '#0040c8',
//     'fill-color': '#fff',
//     'fill-opacity': 0
//   }
// };


export default function MapView({ clubClicked }: Props) {
  const mapRef = useRef<MapRef>();

  const onClick = (event: MapLayerMouseEvent) => {
    // if (!event) return;
    console.log(event);
    // const feature = event.features[0];
    // if (feature) {
    //   // calculate the bounding box of the feature
    //   const [minLng, minLat, maxLng, maxLat] = bbox(feature);

    //   if (!mapRef.current) return;
    //   mapRef.current.fitBounds(
    //     [
    //       [minLng, minLat],
    //       [maxLng, maxLat]
    //     ],
    //     {padding: 40, duration: 1000}
    //   );
    // }
  };




  return (
    <div className="map-container place-self-center h-screen w-full">
      <Map
        ref={mapRef}
        initialViewState={{
          longitude: 149.1079,
          latitude: -35.321,
          zoom: 10.2,
        }}
        // mapStyle="mapbox://styles/nugmc7/clih0drh7001301pwhkw07bzo"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        interactiveLayerIds={['clubAreas-fill']}
        onClick={onClick}
        mapStyle={MAP_STYLE as MapboxStyle}
      >
        {placePoints.features.map((club) => (
          <Marker
            key={club.id}
            longitude={club.geometry.coordinates[0]}
            latitude={club.geometry.coordinates[1]}
            onClick={() => clubClicked(club.id)}
            // icon-scale={ ["*", ["interpolate", ["exponential", 2], ["zoom"]], ]}
          >
            <img
              className="h-8 w-8"
              src={"/images/clubLogos/" + club.properties.logoImg}
            />
          </Marker>
        ))}

        {/* <Source
          id="my-data"
          type="geojson"
          data={'/dataFiles/pointAreas.geojson'}
          
        >
          <Layer {...dataLayer} />
        </Source> */}
      </Map>
    </div>
  );
}




