'use client';

import React, { FC } from 'react';
import './profiles.css'

interface Props {
    imgName: string,
    title: string,
    firstName: string,
    prevSlide: string,
    currentSlide: string,
    nextSlide: string,
    learnLink: string,
}

function Display (props:Props) {

   
    return (
        <>
            <div id={props.currentSlide} className='snap-center snap-always flex flex-row'>
                    <div className="relative w-screen h-screen overflow-hidden">
                                   
                        <a href={props.prevSlide}><img src="/images/arrow.png" id="arrowLeft" className="absolute select-none top-1/2 left-6 md:left-12 xl:left-24 w-12 z-10 h-auto rotate-180"/></a>
                        <a href={props.nextSlide}><img src="/images/arrow.png" id="arrowRight" className="absolute select-none top-1/2 right-6 md:right-12 xl:right-24 w-12 z-10 h-auto"/></a>

                        <div className="w-1/3 lg:w-2/12 overflow-hidden top-1/2 right-6 md:right-12 xl:right-24 absolute h-full animateTest">
                            <div id="circle"><img src="/images/circle.png" className="select-none w-12 z-10 h-auto"/></div>
                            <div id="dashLeft"><img src="/images/dash.png" className="select-none w-12 z-10 h-auto"/></div>
                            <div id="dashMiddle"><img src="/images/dash.png" className="select-none w-12 z-10 h-auto"/></div>
                            <div id="dashRight"><img src="/images/dash.png" className="select-none w-12 z-10 h-auto"/></div>
                        </div>
                         
                        <h1 className="font-serif tracking-wider font-bold mt-12 text-5xl text-white">{props.title}</h1>
          
                        <button className="font-sans font-extrabold relative text-white border-white rounded-lg border-solid border-2 px-3 py-6 text-center cursor-pointer transition-all hover:bg-white hover:text-purple mt-8 text-3xl">Learn more about {props.firstName}</button>

                        <div className="w-screen z-0 h-[70vh] md:h-[65vh] bottom-0 mx-auto bg-contain absolute bg-no-repeat bg-bottom grayscale" style={{ backgroundImage: `url(/images/profiles/${props.imgName}.png)` }}/>
                    </div>
            </div>
        </>
    )
}



export default Display;