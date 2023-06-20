'use client';

import { useState } from "react";
import Details from './Details'
import { playerDetails } from '../data';


export default function ProfileDetails() {

  const [details, setDetails]: null | any = useState(playerDetails.players[2]);
  console.log(details.properties);

  return (
    <main className="bg-bgPink h-screen w-screen overflow-hidden">
      
      <Details
       
        />
    </main>
  )
}