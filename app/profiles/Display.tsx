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
            <div id={props.currentSlide} className='snap-center snap-always scroll-mx-3 flex flex-row'>
                    <div className="relative w-screen h-screen overflow-hidden">
                                   
                        {/* <a href={props.prevSlide}><img src="/images/arrow.png" id="arrowLeft" className="absolute select-none top-1/2 left-6 md:left-12 xl:left-24 w-12 z-10 h-auto rotate-180"/></a>
                        <a href={props.nextSlide}><img src="/images/arrow.png" id="arrowRight" className="absolute select-none top-1/2 right-6 md:right-12 xl:right-24 w-12 z-10 h-auto"/></a> */}

                        <div className="w-screen top-1/2 right-6 md:right-12 xl:right-24 absolute h-full animateTest">
                            <div id="circle" className="right-[19rem]"><img src="/images/circle.png" className="select-none w-12 z-10 h-auto"/></div>
                            <div id="dashFarLeft" className="right-72"><img src="/images/dash.png" className="select-none w-12 z-10 h-auto"/></div>
                            <div id="dashLeft" className="right-56"><img src="/images/dash.png" className="select-none w-12 z-10 h-auto"/></div>
                            <div id="dashMiddle" className="right-40"><img src="/images/dash.png" className="select-none w-12 z-10 h-auto"/></div>
                            <div id="dashRight" className="right-24"><img src="/images/dash.png" className="select-none  w-12 z-10 h-auto"/></div>
                        </div>
                         
                        <h1 className="font-serif tracking-wider font-bold mt-[15vh] text-6xl md:text-8xl lg:text-9xl text-white">{props.title}</h1>
          
                    
                        <a className='group' href={'/profiles/details#'+ (props.learnLink) }> 
                        <span className="inline-flex items-center justify-center w-16 h-16 mr-2 transition-colors duration-150 bg-white rounded-full group-hover:w-96 group-hover:shadow-2xl group-hover:shadow-white group-hover:bg-opacity-0">
                          <p className="text-white hidden text-lg font-sans group-hover:inline-flex">Learn more about {props.firstName}</p>
                          <img src="/images/arrowPurple.png" className="h-auto w-4 rotate-90 group-hover:hidden"/>
                          <img src="/images/arrow.png" className="h-auto w-4 rotate-90 hidden group-hover:block group-hover:w-8 group-hover:h-auto group-hover:transition-transform group-hover:duration-150"/>
                        </span>
                        </a>
                
{/*                             
                        {/* <button className="font-sans font-extrabold relative text-white border-white rounded-lg border-solid border-2 px-3 py-6 text-center cursor-pointer transition-all hover:bg-white hover:text-purple mt-8 text-3xl">Learn more about {props.firstName}</button> */}

                        <div className="w-screen z-0 h-[70vh] md:h-[65vh] bottom-0 mx-auto bg-contain absolute bg-no-repeat bg-bottom grayscale" style={{ backgroundImage: `url(/images/profiles/${props.imgName}.png)` }}/>
                    </div>
            </div>
        </>
    )
}



export default Display;