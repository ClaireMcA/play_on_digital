import React, {useRef} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
// import mapboxgl from "mapbox-gl";
import ReactMapGL, { Marker, MapLayerMouseEvent, MapRef, MapboxStyle } from 'react-map-gl';
import { placePoints } from './data';
import bbox from '@turf/bbox';
import MAP_STYLE from './mapStyle';

interface Props {
  clubClicked: any
}


export default function MapView({ clubClicked }: Props) {
  const mapRef = useRef<MapRef| null>(null);

  const onClick = (e: MapLayerMouseEvent) => {
    if (e.features == undefined) return;
    if (e.features[0] == undefined) return;
    if (e.features[0].properties == undefined) return;

    console.log(e.features[0]);

    const feature = e.features[0];
    if (feature) {
      // calculate the bounding box of the feature
      const [minLng, minLat, maxLng, maxLat] = bbox(feature);



      if (!mapRef.current) return;
      mapRef.current.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat]
        ],
        {padding: 40, duration: 1000}
      );
    }
  };




  return (
    <div className="map-container place-self-center h-screen w-full">
      <ReactMapGL
        ref={mapRef}
        initialViewState={{
          longitude: 149.1079,
          latitude: -35.321,
          zoom: 10.2,
        }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        interactiveLayerIds={["clubAreas-fill"]}
        onClick={(e: MapLayerMouseEvent) => {
          clubClicked(e);
          onClick(e)
        }}
        mapStyle={MAP_STYLE as MapboxStyle}
      >
        {placePoints.features.map((club) => (
          <Marker
            key={club.id}
            longitude={club.geometry.coordinates[0]}
            latitude={club.geometry.coordinates[1]}
            onClick={() => clubClicked(club.id)}
            // scale={0.5}
            icon-size={0.9}
            // icon-scale={['interpolate', ['linear'], ['zoom'], 15, 0.0015, 23, 0.2]}
          >
            <img
              className="h-8 w-8"
              src={"/images/clubLogos/" + club.properties.logoImg}
            />
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}




