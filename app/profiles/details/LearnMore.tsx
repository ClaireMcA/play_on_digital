'use client';

import React, { FC } from 'react';
import '../profiles.css'
import { playerDetails } from '../data';

interface Props {    
    firstName: string,
    lastName: string,
    imageName: string,
    leftButton: string,
    rightButton: string,
    leftText: string,
    leftText2: string,
    rightText: string,
    rightText2: string,
    returnSlide: number,
    club: string,
    position: string,
    jersey: string,
    retired: boolean,
}

function LearnMore (props:Props) {

    return (
        <>
            <div id={props.firstName + props.lastName} className='flex flex-row'>
                <div className="relative w-screen h-screen overflow-hidden flex mx-auto flex-col items-center text-center">
                
                    {/* Shadow  */}
                    <div className="animatedBG w-[80%] left-[9.5%] h-[51vh] md:h-[56vh] lg:h-[61vh] bottom-0 bg-contain absolute bg-no-repeat bg-bottom grayscale" style={{ backgroundImage: `url(/images/profiles/${props.imageName}Alt.png)` }} />
    
                   {/* Image */}
                   <div className="w-screen z-[2] h-[50vh] md:h-[55vh] lg:h-[60vh] bottom-0 mx-auto bg-contain absolute bg-no-repeat bg-bottom grayscale" style={{ backgroundImage: `url(/images/profiles/${props.imageName}Alt.png)` }} />


                     {/* <div className="animatedBG z-[0] w-1/2 left-[24.5%] h-[50vh] md:h-[55vh] lg:h-[60vh] bottom-[1%] mx-auto bg-contain absolute bg-no-repeat bg-bottom grayscale" 
                        style={{ backgroundImage: `url(/images/profiles/${props.firstName + props.lastName}Alt.png)` }} />
                    <div className="w-screen z-[2] h-[50vh] md:h-[55vh] lg:h-[60vh] bottom-0 mx-auto bg-contain absolute bg-no-repeat bg-bottom grayscale" 
                        style={{ backgroundImage: `url(/images/profiles/${props.firstName + props.lastName}Alt.png)` }}>
                    </div> */}


                    <a className='group' href={'/profiles#Slide'+ (props.returnSlide)}><button className="title z-30 absolute left-6 top-12 fancyUnderlineRight text-white border-white border-2 border-solid px-4 py-3 rounded-full ">
                    <img src="/images/arrow.png" className="inline-flex h-5 w-auto mr-4 rotate-180 my-auto"/>
                    <span className="text-white underline-offset-[6px]">Back</span>
                    </button>
                    </a>

                    <h1 className="font-serif tracking-wider font-bold mt-[5vh] text-6xl text-white">{props.firstName + " " + props.lastName}</h1>
                    <span><h1 className="title my-4 text-3xl text-white">{props.position} - {props.club}</h1>
                        {props.retired && (
                                <h1 className="font-serif absolute mt-8 text-7xl left-1/4 w-1/2 text-white">{props.jersey} <span className='text-6xl'>- Retired</span></h1>
                        )}
                        {props.retired === false && (
                            <h1 className="font-serif absolute mt-8 text-7xl left-1/4 w-1/2 text-white">{props.jersey}</h1>
                            )}
                    </span>
                    


                        {/* Hidden Field Boxes */}
                        <div className="z-30 flex">
                       
                           {/* Box 1 - Left Content */}
                            <div className="flex-col mt-24 w-2/3 relative font-sans mx-auto overflow-hidden ">
                                <label className="grow px-4 py-3 absolute mt-2 w-48 inset-x-0 mx-auto title text-white border-white border-2 rounded-full fancyUnderlineCenter" htmlFor={'collapse'+ (props.firstName + props.lastName) }>{props.leftButton}</label>
                                
                                {/* when on another player, the buttons are opening the boxes on the Lydia page because they all render as the one page... need to add a new prop for collapsing per playter */}
                                <input className="peer mx-4 my-3 h-0 w-0 appearance-none border text-slate-800 accent-slate-600 opacity-0" type="checkbox" name={'collapse'+ (props.firstName + props.lastName) } id={'collapse'+ (props.firstName + props.lastName) } />
                                
                                <div className="-transparent relative mx-4 mt-8 text-left rounded-lg bg-white font-sans -translate-y-full scale-75 
                                scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100
                                peer-checked:opacity-90">
                                
                                    <p className='px-4 py-2 text-darkGrey'>{props.leftText}</p>
                                    <p className='px-4 py-2 text-darkGrey mt-4'>{props.leftText2}</p>
                                
                                </div>
                            </div>


                            {/* Box 2 - Right Content */}
                            <div className="flex-col mt-40 font-sans relative w-2/3 h-auto mx-auto overflow-hidden">
                                <label className="grow px-4 py-3 absolute w-48 inset-x-0 mx-auto title text-white border-white border-2 rounded-full fancyUnderlineCenter" htmlFor={'collapse2'+ (props.firstName + props.lastName) }>{props.rightButton}</label>
                                
                                <input className="bg-white peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0" type="checkbox" name={'collapse2'+ (props.firstName + props.lastName) } id={'collapse2'+ (props.firstName + props.lastName) } />
                            
                                <div className="-transparent relative mx-4 mt-8 text-left rounded-lg bg-white font-sans -translate-y-full scale-75 
                                scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100
                                peer-checked:opacity-90">
                                
                                
                                    <p className='px-4 py-2 text-darkGrey'>{props.rightText}</p>
                                    <p className='px-4 py-2 text-darkGrey mt-4'>{props.rightText2}</p>
                                
                                </div>
                            </div>

                        </div>
    
    

                 
                </div>
            </div>
        </>
    )
}



export default LearnMore;