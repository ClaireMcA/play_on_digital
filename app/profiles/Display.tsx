'use client';

import React, { FC, MouseEventHandler } from 'react';
import { useState } from 'react';
import './profiles.css'
import { playerDetails } from './data';


interface Props {
    firstName: string,
    lastName: string,
    prevSlide: string,
    currentSlide: string,
    nextSlide: string,
}

// let timer = setTimeout(() => {nameCheck(),1000});

// function nameCheck(){{
//     if (currSlide == 1) {setName(name1)} 
//     else if (currSlide == 2) {setName(name2)} 
//     else if (currSlide == 3) {setName(name3)} 
//     else if (currSlide == 4) {setName(name4)} 
//     else {setName(name5); }}} 

// }

function Display (props:Props) {

    const name1 = playerDetails.players[0].firstName
    const name2 = playerDetails.players[1].firstName
    const name3 = playerDetails.players[2].firstName
    const name4 = playerDetails.players[3].firstName
    const name5 = playerDetails.players[4].firstName
    const [currSlide, setCurrSlide] = useState<number>(1);
    const [name, setName] = useState<string>("");
    

    const onClick: MouseEventHandler = () => {
        
        if (currSlide == 1) {
            setName(name1)
        } else if (currSlide == 2) {
            setName(name2)
        } else if (currSlide == 3) {
            setName(name3)
        } else if (currSlide == 4) {
            setName(name4)
        } else {setName(name5); }
    }


   
    return (
        <>
       {/* <script> timer()</script>  */}

            <div id={props.currentSlide} className='snap-center snap-always scroll-mx-3 flex flex-row'>
                    <div className="relative w-screen h-screen overflow-hidden">

                    <div className="w-screen flex flex-row justify-center">
                        <img className="z-0 absolute inset-y-0 top-1/2 h-auto w-[60vw] mx-auto rotate-[10deg]" 
                            src="images/SVG/BrushWhite.svg">
                        </img>
                    </div>
                                   
                        {/* <a href={props.prevSlide}><img src="/images/arrow.png" id="arrowLeft" className="absolute select-none top-1/2 left-6 md:left-12 xl:left-24 w-12 z-10 h-auto rotate-180"/></a>
                        <a href={props.nextSlide}><img src="/images/arrow.png" id="arrowRight" className="absolute select-none top-1/2 right-6 md:right-12 xl:right-24 w-12 z-10 h-auto"/></a> */}

                        <span className="inline-grid grid-cols-5 mt-4 gap-4 text-white font-sans font-extrabold">
                            <a onClick={() => {onClick}} href='#Slide1' className="hover:underline">{name1}</a>
                            <a onClick={() => {onClick}} href='#Slide2' className="hover:underline">{name2}</a>
                            <a onClick={() => {onClick}} href='#Slide3' className="hover:underline">{name3}</a>
                            <a onClick={() => {onClick}} href='#Slide4' className="hover:underline">{name4}</a>
                            <a onClick={() => {onClick}} href='#Slide5' className="hover:underline">{name5}</a>
                        </span>

                        <div className="w-screen top-1/2 right-6 md:right-12 xl:right-24 absolute h-full animateTest">
                            <div id="circle" className="right-[19rem]"><img src="/images/circle.png" className="select-none w-12 z-10 h-auto"/></div>
                            <div id="dashFarLeft" className="right-72"><img src="/images/dash.png" className="select-none w-12 z-10 h-auto"/></div>
                            <div id="dashLeft" className="right-56"><img src="/images/dash.png" className="select-none w-12 z-10 h-auto"/></div>
                            <div id="dashMiddle" className="right-40"><img src="/images/dash.png" className="select-none w-12 z-10 h-auto"/></div>
                            <div id="dashRight" className="right-24"><img src="/images/dash.png" className="select-none  w-12 z-10 h-auto"/></div>
                        </div>
                         
                        <h1 className="font-serif z-10 tracking-wider mt-[8vh] text-6xl md:text-8xl lg:text-9xl text-white">{props.firstName}<span className=''> {props.lastName}</span></h1>
                        
                        <a className='group z-30' href={'/profiles/details#'+ (props.firstName) + (props.lastName) }> 
                            <div className="max-w-[196px] z-30 mx-auto border-solid border-4 text-white border-white rounded-full px-4 py-3 font-extrabold text-center text-xl font-sans fancyUnderlineCenter">
                                <p className="relative ">Select Player</p>
                            </div>
                        </a>
{/*                             
                        {/* <button className="font-sans font-extrabold relative text-white border-white rounded-lg border-solid border-2 px-3 py-6 text-center cursor-pointer transition-all hover:bg-white hover:text-purple mt-8 text-3xl">Learn more about {props.firstName}</button> */}

                        <div className="w-screen z-0 h-[70vh] md:h-[65vh] bottom-0 mx-auto bg-contain absolute bg-no-repeat bg-bottom grayscale" style={{ backgroundImage: `url(/images/profiles/${props.firstName + props.lastName}.png)` }}/>
                    </div>
            </div>
        </>
    )
}



export default Display;