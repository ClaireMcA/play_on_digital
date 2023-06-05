import React, { useRef, useEffect, useState } from 'react';

import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from "mapbox-gl";


interface Props {
    vidNum: number,
    exitClick: any;
}


export default function MapTest() {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(149.1079);
    const [lat, setLat] = useState(-35.321);
    const [zoom, setZoom] = useState(10.2);


    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
            style: "mapbox://styles/nugmc7/clih0drh7001301pwhkw07bzo",
            center: [lng, lat],
            zoom: zoom
        });


        // map.current.on('load', () => {
        //     // Center the map on the coordinates of any clicked circle from the 'circle' layer.
        //     map.current.on('click', 'circle', (e) => {
        //         map.current.flyTo({
        //         center: e.features[0].geometry.coordinates
        //         });
        //     });
        // });



        map.current.on('load', () => {
            map.current.addSource('places', {
            // This GeoJSON contains features that include an "icon"
            // property. The value of the "icon" property corresponds
            // to an image in the Mapbox Streets style's sprite.
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            "type": "Feature",
                            "properties": {
                            "club": "wodenValley",
                            "description": "Testing",
                            "logo": "/public/images/clubLogos/wodenValley.jpeg"
                            },
                            "geometry": {
                            "coordinates": [
                                [
                                [
                                    149.095147,
                                    -35.371723
                                ],
                                [
                                    149.097508,
                                    -35.371665
                                ],
                                [
                                    149.096674,
                                    -35.368265
                                ],
                                [
                                    149.096221,
                                    -35.368173
                                ],
                                [
                                    149.09567,
                                    -35.367884
                                ],
                                [
                                    149.094963,
                                    -35.367896
                                ],
                                [
                                    149.094864,
                                    -35.367642
                                ],
                                [
                                    149.093635,
                                    -35.367677
                                ],
                                [
                                    149.09379,
                                    -35.370213
                                ],
                                [
                                    149.095147,
                                    -35.370236
                                ],
                                [
                                    149.095147,
                                    -35.371723
                                ]
                                ]
                            ],
                            "type": "Polygon"
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                            "club": "canberraWhiteEagles",
                            "description": "Testing",
                            "logo": "/public/images/clubLogos/CanberraWhiteEagles.png"
                            },
                            "geometry": {
                            "coordinates": [
                                [
                                [
                                    149.096757,
                                    -35.34487
                                ],
                                [
                                    149.097639,
                                    -35.344601
                                ],
                                [
                                    149.098243,
                                    -35.344224
                                ],
                                [
                                    149.098924,
                                    -35.346172
                                ],
                                [
                                    149.099023,
                                    -35.347204
                                ],
                                [
                                    149.096945,
                                    -35.34715
                                ],
                                [
                                    149.096598,
                                    -35.346977
                                ],
                                [
                                    149.096995,
                                    -35.345749
                                ],
                                [
                                    149.096757,
                                    -35.34487
                                ]
                                ]
                            ],
                            "type": "Polygon"
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                                "club": "southCanberra",
                                "description": "Testing",
                                "logo": "/public/images/clubLogos/southCanberra.jpeg"
                            },
                            "geometry": {
                            "coordinates": [
                                [
                                [
                                    149.147144,
                                    -35.334601
                                ],
                                [
                                    149.147447,
                                    -35.33235
                                ],
                                [
                                    149.146143,
                                    -35.3322
                                ],
                                [
                                    149.144879,
                                    -35.332995
                                ],
                                [
                                    149.144286,
                                    -35.333924
                                ],
                                [
                                    149.146011,
                                    -35.334413
                                ],
                                [
                                    149.147144,
                                    -35.334601
                                ]
                                ]
                            ],
                            "type": "Polygon"
                            }
                        },
                        {
                            "type": "Feature",
                            "properties": {
                            "club": "westonMolongolo",
                            "description": "Testing Values",
                            "logo": "/public/images/clubLogos/westonMolongolo.png"
                            },
                            "geometry": {
                            "coordinates": [
                                [
                                [
                                    149.058179,
                                    -35.353426
                                ],
                                [
                                    149.056277,
                                    -35.353471
                                ],
                                [
                                    149.0564,
                                    -35.355045
                                ],
                                [
                                    149.056017,
                                    -35.35529
                                ],
                                [
                                    149.056045,
                                    -35.356875
                                ],
                                [
                                    149.056907,
                                    -35.357556
                                ],
                                [
                                    149.057468,
                                    -35.357868
                                ],
                                [
                                    149.058261,
                                    -35.358136
                                ],
                                [
                                    149.058398,
                                    -35.357053
                                ],
                                [
                                    149.058357,
                                    -35.355525
                                ],
                                [
                                    149.058179,
                                    -35.353426
                                ]
                                ]
                            ],
                            "type": "Polygon"
                            },
                        }
                    ]
                }
            });
            // Add a layer showing the places.
            map.current.addLayer({
                'id': 'places',
                'type': 'fill',
                'source': 'places', // reference the data source
                'layout': {},
                'paint': {
                'fill-color': '#FEC66A', // blue color fill
                'fill-opacity': 0.7
            // 'id': 'places',
            // 'type': 'symbol',
            // 'source': 'places',
            // 'layout': {
            // 'icon-image': ['get', 'icon'],
            // 'icon-allow-overlap': true
            }
            });
             
            // // When a click event occurs on a feature in the places layer, open a popup at the
            // // location of the feature, with description HTML from its properties.
            // map.current.on('click', 'places', (e) => {
            // // Copy coordinates array.
            // const coordinates = e.features[0].geometry.coordinates.slice();
            // const description = e.features[0].properties.description;
             
            // // Ensure that if the map is zoomed out such that multiple
            // // copies of the feature are visible, the popup appears
            // // over the copy being pointed to.
            // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            // coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            // }
             
            // new mapboxgl.Popup()
            // .setLngLat(coordinates)
            // .setHTML(description)
            // .addTo(map);
            // });
             
            // // Change the cursor to a pointer when the mouse is over the places layer.
            // map.current.on('mouseenter', 'places', () => {
            // map.current.getCanvas().style.cursor = 'pointer';
            // });
             
            // // Change it back to a pointer when it leaves.
            // map.current.on('mouseleave', 'places', () => {
            // map.current.getCanvas().style.cursor = '';
            // });
        });
    


    });






    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
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

