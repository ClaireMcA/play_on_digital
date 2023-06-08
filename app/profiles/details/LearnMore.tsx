'use client';

import React, { FC } from 'react';
import '../profiles.css'

interface Props {
    id: string,
    secondaryImage: string,
    title: string,
    onField: string,
    offField: string,
    returnSlide: number
}

function LearnMore (props:Props) {

   
    return (
        <>
            <div id={props.id} className='flex flex-row'>
                <div className="relative w-screen h-screen flex mx-auto flex-col items-center text-center">
                    <h1 className="font-serif tracking-wider font-bold mt-[5vh] text-6xl text-white">{props.title}</h1>
                    <h1 className="font-sans tracking-wider font-bold mt-4 text-6xl text-white">{props.onField}</h1>
                    <h1 className="font-sans tracking-wider font-bold mt-4 text-6xl text-white">{props.offField}</h1>
    
                    <a href={'/profiles#Slide'+ (props.returnSlide)} className="absolute underline underline-offset-8 font-bold top-6 left-6 font-sans tracking-wider mt-4 text-3xl text-white 
                    hover:bg-white hover:text-purple hover:rounded-lg py-3 px-6">Back</a>
    

                    <div className="w-screen z-0 h-[70vh] md:h-[65vh] bottom-0 right-1/4 bg-contain absolute bg-no-repeat bg-bottom grayscale" style={{ backgroundImage: `url(/images/profiles/${props.secondaryImage}.png)` }}/>

                </div>
            </div>
        </>
    )
}



export default LearnMore;