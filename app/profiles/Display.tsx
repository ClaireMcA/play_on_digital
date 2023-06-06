'use client';

import React, { FC } from 'react';
import image from '/public/images/profiles/LydiaBlack.png';

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
            <div id={props.currentSlide}>
                    <div className="relative w-screen h-screen overflow-hidden">
                    <a href={props.prevSlide}><img src="/images/arrow.png" className="absolute mt-96 ml-24 w-12 h-auto rotate-180"/></a>
                    <a href={props.nextSlide}><img src="/images/arrow.png" className="absolute mt-96 mr-24 w-12 h-auto right-0"/></a>
                   
   
                        {/* <div className=" hiderLeft animateTest">
                         <a href={props.prevSlide}> <div id="arrowLeft"><img src="src/Assets/arrow.png" className="animateWide"/></div></a>
                        </div>
                        <div className=" hiderRight animateTest">
                            <div id="circle"><img src="src/Assets/circle.png" className="animateSquare"/></div>
                            <div id="dashLeft"><img src="src/Assets/dash.png" className="animateWide"/></div>
                            <div id="dashMiddle"><img src="src/Assets/dash.png" className="animateWide"/></div>
                            <div id="dashRight"><img src="src/Assets/dash.png" className="animateWide"/></div>
                            <a href="#slide2"><div id="arrowRight"><img src="src/Assets/arrow.png" className="animateWide"/></div></a>
                        </div> */}
                         
                        <h1 className="font-serif tracking-wider font-bold mt-12 text-5xl text-white">{props.title}</h1>
          
                        <button className="font-sans relative text-white border-white rounded-lg border-solid border-4 px-5 py-10 text-center cursor-pointer transition-all hover:bg-white hover:text-purple mt-8 text-3xl">Learn more about {props.firstName}</button>

                        <div className="w-screen h-96 bottom-0 mx-auto bg-contain absolute bg-no-repeat bg-bottom grayscale" style={{ backgroundImage: `url(/images/profiles/${props.imgName}.png)` }}/>
                    </div>
                </div>
        </>
    )
}



export default Display;