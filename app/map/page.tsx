'use client';

import { useState } from "react";
import MapView from "./Map"
import SideBar from "./SideBar";
import Club from "./Club";
import { placePoints } from './data';

export default function MapPage() {

  const [currentClub, setcurrentClub]: null | any = useState(placePoints.features[0]);
  // console.log(currentClub)


  const handleClick = (id: number) => {
    setcurrentClub(placePoints.features[id - 1]);
    console.log(currentClub.properties.club);
  }

  return (
    <main className="items-start bgDarkGrey max-w-full w-screen grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-[2fr_1fr]">
      <MapView clubClicked={(id:number) => handleClick(id)}/>
      <Club
        club = {currentClub.properties.club}
        ground = {"Latham Playing Fields"}
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
