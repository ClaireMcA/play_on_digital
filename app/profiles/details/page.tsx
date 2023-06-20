'use client';

import { useState } from "react";
import Details from './Details'
import { playerDetails } from '../data';


export default function ProfileDetails() {

  const [details, setDetails]: null | any = useState(playerDetails.players[0]);
  console.log(details.properties);

  return (
    <main className="bg-bgPink h-screen w-screen overflow-hidden">
      
      <Details
       
        />
    </main>
  )
}

{/* 
      <Details

        firstName = {details.properties.firstName}
        lastName = {details.properties.lastName}
        prevSlide = {details.properties.prevSlide}
        currentSlide = {details.properties.currentSlide}
        nextSlide = {details.properties.nextSlide}
        onField = {details.properties.onField}
        onField2 = {details.properties.onField2}
        offField = {details.properties.offField} 
        returnSlide = {details.properties.returnSlide} 

        />
      */}