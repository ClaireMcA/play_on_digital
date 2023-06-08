'use client';

import image from '/public/images/ACaffery1.webp';
import React, { FC } from 'react';
import Player from './Player';

interface Props {
    imgNum: number,
    title: string,
    subtitle: string,
    onClick: any
}

function Tile (props:Props) {



    return (
        <>

            <button type="button" onClick={props.onClick} className="rounded-lg grayscale hover:grayscale-0 w-full h-full block bg-cover" style={{ backgroundImage: `url(/images/ACaffery${props.imgNum}.webp)` }}>
                <div className="p-2 align-baseline" style={{ backgroundColor: "rgb(31, 41, 55, 0.7)" }}>
                <h5 className="text-white title">{props.title}</h5>
                <p className="secondaryTitle text-white">{props.subtitle}</p>
                </div>
            </button>
        
        
        {/* <div className="mb-24 md:mb-0">
          <button id="openOne" className="rounded-lg shadow-lg w-full h-full block bg-white">
            <div className="flex justify-center">
              <div className="flex justify-center tileImageCont" style={{ marginTop: "-75px" }}>
                <img src="src/ACaffery1.webp" className="tileImage" alt=""/>
              </div>
            </div>
            <div className="p-6">
              <h5 className="text-lg title mb-4">Interviewee One</h5>
              <p className="secondaryTitle mb-6">Very Good FC</p>
            </div>
         </button>
        </div> */}
        </>
    )
}



export default Tile;