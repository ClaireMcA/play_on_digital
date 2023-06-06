'use client';

import React, { FC } from 'react';

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
                         
                        <h1 className="trade-gothic-next tracking-wider font-bold mt-12 text-5xl text-purple">{props.title}</h1>
          
                        <button className="trade-gothic-next relative border-white rounded-lg border-solid border-4 px-5 py-10 text-center cursor-pointer transition-all hover:bg-white hover:text-purple mt-8 text-3xl">Learn more about bananas {props.firstName}</button>

                        <img className="w-auto h-96 bottom-0 absolute object-cover right-1/4 left-1/2 -ml-48 grayscale" src='/images/profiles/${props.imgName}.png'/>
                    </div>
                </div>
        </>
    )
}



export default Display;