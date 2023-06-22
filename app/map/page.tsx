'use client';

import { useState } from "react";
import MapView from "./Map"
import SideBar from "./SideBar";
import Club from "./Club";
import { placePoints } from './data';
import { MapLayerMouseEvent, MapRef } from 'react-map-gl';
import bbox from '@turf/bbox';

export default function MapPage() {

  const defaultFeature = {
    type: 'point',
    properties: {
        club: 'Select a Club',
        field: '',
        desc: '',
        logoImg: 'belwest.png'
    },
    geometry: {
        coordinates: [],
        type: 'string'
    }
  }

  const [currentClub, setcurrentClub]: null | any = useState(defaultFeature);
  // console.log(currentClub)


  const handleClick = (e: MapLayerMouseEvent) => {
   
    if (e.features == undefined) return;
    if (e.features[0] == undefined) return;
    if (e.features[0].properties == undefined) return;
    const id = e.features[0].properties.clubId;

    setcurrentClub(placePoints.features[id - 1]);
    console.log(currentClub.properties.club);

  }





  return (
    <main className="items-start bgDarkGrey max-w-full w-screen grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-[2fr_1fr]">
      <MapView clubClicked={(e: MapLayerMouseEvent) => handleClick(e)}/>
      <Club
        club = {currentClub.properties.club}
        field = {currentClub.properties.field}
        desc = { currentClub.properties.desc}
        img = {currentClub.properties.logoImg}
        // club = "Belwest"
        // ground = {"Latham Playing Fields"}
        // desc = "This si teh belwest club and a few details about them."
        // img = "belwest.png"
      />
    </main>
  )
}
