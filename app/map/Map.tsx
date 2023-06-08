import React, { useRef, useEffect, useState } from 'react';
import * as data from './data';

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from "mapbox-gl";


// interface Props {
//     vidNum: number,
//     exitClick: any;
// }


export default function Map() {

    const logoImage = 'public/images/clubLogos/ADFAVikings.png'
    const image = '';
    const mapContainer = useRef<any>(null); // : Type
    const map = useRef<mapboxgl.Map | null>(null);
    const [lng, setLng] = useState<number>(149.1079);
    const [lat, setLat] = useState<number>(-35.321);
    const [zoom, setZoom] = useState<number>(10.2);
    // console.log();

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
            style: "mapbox://styles/nugmc7/clih0drh7001301pwhkw07bzo",
            center: [lng, lat],
            zoom: zoom
        });

        map.current.on('load', () => {
            if (!map.current) return; 
            

            map.current.addSource('placeAreas', {
                'type': 'geojson',
                'data': {
                  'type': 'FeatureCollection',
                  'features': [
                    {
                      "geometry": {
                        "coordinates": [[
                          [
                            149.0272720554314,
                            -35.20564841892684
                          ],
                          [
                            149.02932855426764,
                            -35.20615251956121
                          ],
                          [
                            149.03167296294373,
                            -35.206690223454416
                          ],
                          [
                            149.03393511166354,
                            -35.20749677261768
                          ],
                          [
                            149.0354569208028,
                            -35.208404130850916
                          ],
                          [
                            149.03652630019906,
                            -35.20964753122191
                          ],
                          [
                            149.0369787299444,
                            -35.21129416727088
                          ],
                          [
                            149.0374311596874,
                            -35.213041581245854
                          ],
                          [
                            149.03854166905944,
                            -35.214486529776735
                          ],
                          [
                            149.04018686812844,
                            -35.215763439630585
                          ],
                          [
                            149.0423256269209,
                            -35.21720833971342
                          ],
                          [
                            149.04318935643118,
                            -35.21774597038788
                          ],
                          [
                            149.0417909372216,
                            -35.219090031494005
                          ],
                          [
                            149.040598167898,
                            -35.22023246593552
                          ],
                          [
                            149.0396110484557,
                            -35.22194608744617
                          ],
                          [
                            149.0386239290134,
                            -35.22335727799197
                          ],
                          [
                            149.03763680957104,
                            -35.22453325136867
                          ],
                          [
                            149.03632065031542,
                            -35.22560841211375
                          ],
                          [
                            149.0350867510137,
                            -35.22678435286776
                          ],
                          [
                            149.03475771119804,
                            -35.22748990913962
                          ],
                          [
                            149.03303025217508,
                            -35.22648196972962
                          ],
                          [
                            149.03159070298977,
                            -35.22493643831773
                          ],
                          [
                            149.03072697347721,
                            -35.22352527523187
                          ],
                          [
                            149.0295753341294,
                            -35.222349287249266
                          ],
                          [
                            149.02805352499007,
                            -35.221509285398824
                          ],
                          [
                            149.02603815612963,
                            -35.220635674252115
                          ],
                          [
                            149.02389939733717,
                            -35.21982925561584
                          ],
                          [
                            149.02171950857127,
                            -35.2192580375683
                          ],
                          [
                            149.01999204954836,
                            -35.219291638740465
                          ],
                          [
                            149.01951203600845,
                            -35.21939855021997
                          ],
                          [
                            149.0193373995233,
                            -35.217829173610006
                          ],
                          [
                            149.01907544479798,
                            -35.21675912670602
                          ],
                          [
                            149.0194247177658,
                            -35.2155820588184
                          ],
                          [
                            149.02034155930664,
                            -35.21472599872473
                          ],
                          [
                            149.02169499206025,
                            -35.21386992960333
                          ],
                          [
                            149.02370331162956,
                            -35.21322787183894
                          ],
                          [
                            149.0250130852607,
                            -35.21240745730472
                          ],
                          [
                            149.02641017713444,
                            -35.2110519716493
                          ],
                          [
                            149.02689042746726,
                            -35.2096251201943
                          ],
                          [
                            149.02706506394998,
                            -35.20794853769398
                          ],
                          [
                            149.02684676834474,
                            -35.20694970613168
                          ],
                          [
                            149.0272720554314,
                            -35.20564841892684
                          ]
                        ]],
                        "type": "Polygon"
                      },
                      "type": "Feature",
                      "properties": {
                        "clubArea": "belwest",
                      }
                    }
                  ]
                }
            });

            // map.current.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', (error, image) => {
            //     if (error) throw error;
            //     if (!map.current) return; 
            //     if (!map.current.hasImage('cat')) map.current.addImage('cat', image);
            // });
    

            // map.current.loadImage(
            //     "https://docs.mapbox.com/mapbox-gl-js/assets/cat.png",
            //     (error, logoImage) => {
            //         if (error) throw error;
            //         if (!map.current) return; 
            //         map.current.addImage("custom-marker", logoImage);
            //         // Add a GeoJSON source with multiple points
            //         map.current.addSource('placePoints', {
            //             'type': 'geojson',
            //             'data': {
            //                 'type': 'FeatureCollection',
            //                 'features': [{
            //                     "geometry": {
            //                         "coordinates": [
            //                             149.03511309237035,
            //                             -35.21809222199347
            //                         ],
            //                         "type": "Point"
            //                     },
            //                     "type": "Feature",
            //                     "properties": {
            //                         "club": "belwest",
            //                         "desc": "Belwest Foxes is a community based volunteer run soccer club based in Latham ACT.",
            //                         "logoImg": "belwest.png"
            //                     }
            //                 }]
            //             }
            //         });

            // Add a layer showing the places.
            map.current.addLayer({
                'id': 'placeAreas',
                'type': 'fill',
                'source': 'placeAreas', // reference the data source
                'layout': {},
                'paint': {
                    'fill-color': '#FEC66A', // blue color fill
                    'fill-opacity': 0.7
                }
            });

            map.current.addLayer({
                'id': 'placePoints',
                'type': 'symbol',
                'source': 'placePoints',
                'layout': {
                    'icon-image': ['get', 'icon'],
                    'icon-allow-overlap': true
                }
            });






        });
    


    });






    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            if (!map.current) return;
            setLng(parseInt(map.current.getCenter().lng.toFixed(4)));
            setLat(parseInt(map.current.getCenter().lat.toFixed(4)));
            setZoom(parseInt(map.current.getZoom().toFixed(2)));
        });

    });


    

    return (
        <div>
        <div ref={mapContainer} className="map-container place-self-center h-screen w-full" />
        </div>
        );

    // const [map, setMap] = React.useState<mapboxgl.Map>();
    // const mapNode = React.useRef(null);

    // React.useEffect(() => {
    //     const node = mapNode.current;
    //         // if the window object is not found, that means
    //         // the component is rendered on the server
    //         // or the dom node is not initialized, then return early
    //     if (typeof window === "undefined" || node === null) return;
    
    //         // otherwise, create a map instance
    //     const mapboxMap = new mapboxgl.Map({
    //       container: node,
    //             accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
    //             style: "mapbox://styles/nugmc7/clih0drh7001301pwhkw07bzo",
    //       center: [149.1079, -35.321],
    //       zoom: 10.15,
    // });
    // 
    // setMap(mapboxMap);

    //     return () => {
    //   mapboxMap.remove();
    // };
    // }, []);

     


    // return (
    //     <div className=" grid h-screen ">
    //             <div ref={mapContainer} className="map-container place-self-center h-screen w-full"/>;
    //     </div>

    // )
}

