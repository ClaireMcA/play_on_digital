'use client';

import React, { FC, MouseEventHandler } from 'react';
import { useState } from 'react';
import './profiles.css'
import { playerDetails } from './data'
import { get } from 'https';


interface Props {
    firstName: string,
    lastName: string,
    imageName: string,
    prevSlide: string,
    currentSlide: number,
    nextSlide: string,
    name1: boolean,
    name2: boolean,
    name3: boolean,
    name4: boolean,
    name5: boolean,
}

function Display(props: Props) {

    // const [currSlide, setCurrSlide] = useState<number>(1);

    return (
        <>
            
            
            <div id={"Slide"+props.currentSlide} className='snap-center snap-always scroll-mx-3 flex flex-row'>
                <div className="relative w-screen h-screen overflow-hidden">
                    
                 {/* Active Slide Controls and Disp;lay - Using conditional visitibility */}
                        <span className="inline-grid mx-auto my-4 grid-cols-5 gap-4 text-white font-sans text-xl">
                       
                        {/* If prop.name1/2/3/4/5 = true - Dispay the "active" styling, if name1/2/3/4/5 = fale - Display normal font with hover function... it works :) */}
                        {props.name1 && (
                            <a href="#Slide1" className='font-extrabold underline underline-offset-[6px] decoration-4'>Ash and Nicole</a>
                        )}
                        {props.name1 === false && (
                            <a href="#Slide1"className='hover:underline'>Ash and Nicole</a>
                        )}

                        {props.name2 && (
                            <a href="#Slide2" className='font-extrabold underline underline-offset-[6px] decoration-4'>Ellie</a>
                        )}
                        {props.name2 === false && (
                            <a href="#Slide2" className='hover:underline'>Ellie</a>
                        )}

                        {props.name3 && (
                            <a href="#Slide3" className='font-extrabold underline underline-offset-[6px] decoration-4'>Sam</a>
                        )}
                        {props.name3 === false && (
                            <a href="#Slide3" className='hover:underline'>Sam</a>
                        )}

                        {props.name4 && (
                            <a href="#Slide4" className='font-extrabold underline underline-offset-[6px] decoration-4'>Michelle</a>
                        )}
                        {props.name4 === false && (
                            <a href="#Slide4" className='hover:underline'>Michelle</a>
                        )}

                        {props.name5 && (
                            <a href="#Slide5"className='font-extrabold underline underline-offset-[6px] decoration-4'>Hayley</a>
                        )}
                        {props.name5 === false && (
                            <a href="#Slide5" className='hover:underline'>Hayley</a>
                        )}

                    </span>

                    <div className="w-screen flex flex-row justify-center">
                        <img className="z-0 absolute inset-y-0 top-1/2 h-auto w-[60vw] mx-auto rotate-[10deg]"
                            src="images/SVG/BrushWhite.svg">
                        </img>
                    </div>
            
                    <div className="w-screen top-1/2 right-6 md:right-12 xl:right-24 absolute h-full animateTest">
                        <div id="circle" className="right-[19rem]"><img src="/images/circle.png" className="select-none w-12 z-10 h-auto" /></div>
                        <div id="dashFarLeft" className="right-72"><img src="/images/dash.png" className="select-none w-12 z-10 h-auto" /></div>
                        <div id="dashLeft" className="right-56"><img src="/images/dash.png" className="select-none w-12 z-10 h-auto" /></div>
                        <div id="dashMiddle" className="right-40"><img src="/images/dash.png" className="select-none w-12 z-10 h-auto" /></div>
                        <div id="dashRight" className="right-24"><img src="/images/dash.png" className="select-none  w-12 z-10 h-auto" /></div>
                    </div>

                    <h1 className="font-serif z-10 tracking-wider mt-[4vh] text-6xl md:text-7xl lg:text-8xl text-white">{props.firstName}<span className=''> {props.lastName}</span></h1>

                    <a className='group z-30' href={'/profiles/details#' + (props.firstName) + (props.lastName)}>
                        <div className="max-w-[196px] z-30 mx-auto border-solid border-4 text-white border-white rounded-full px-4 py-3 font-extrabold text-center text-xl font-sans fancyUnderlineCenter">
                            <p className="relative ">Select Player</p>
                        </div>
                    </a>
                    <div className="w-screen z-0 h-[50vh] md:h-[55vh] lg:h-[60vh] bottom-0 mx-auto bg-contain absolute bg-no-repeat bg-bottom grayscale" style={{ backgroundImage: `url(/images/profiles/${props.imageName}.png)` }} />
                </div>
            </div>
        </>
    )
}



export default Display;