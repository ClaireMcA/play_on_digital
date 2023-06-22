
import React, { FC, MouseEventHandler, useState } from 'react';
import classNames from 'classnames';
import { playerDetails } from '../data';
import '../profiles.css'
    

interface Props {
    currentSlide: string,
}

export default function Controls(props: Props) {

    const name1 = playerDetails.players[0].firstName
    const name2 = playerDetails.players[1].firstName
    const name3 = playerDetails.players[2].firstName
    const name4 = playerDetails.players[3].firstName
    const name5 = playerDetails.players[4].firstName
    const [currSlide, setCurrSlide] = useState<number>(1);
    
    const [active, setActive] = useState(false)

    // const handleToggle = () => {
     
    //   if (currSlide == 1) {
    //     setName(name1), setActive((current) => !current)
    // } else if (currSlide == 2) {
    //     setName(name2)
    // } else if (currSlide == 3) {
    //     setName(name3), setActive((current) => !current)
    // } else if (currSlide == 4) {
    //     setName(name4)
    // } else { setName(name5), setActive((current) => !current); }
    // };



    const [name, setName] = useState<string>("");

    const onClick: MouseEventHandler = () => {

        // if (currSlide == 1) {
        //     setName(name1); console.log(name1); setActive((current) => !current)
        // } else if (currSlide == 2) {
        //     setName(name1); console.log(name2)
        // } else if (currSlide == 3) {
        //     setName(name1); setActive((current) => !current); console.log(name3)
        // } else if (currSlide == 4) {
        //     setName(name1); console.log(name4)
        // } else { setName(name5); setActive((current) => !current); console.log(name5); }
        };


	return (
        <span className="inline-grid grid-cols-5 mt-4 gap-4 text-white font-sans font-extrabold">
            <a onClick={() => { onClick ; }} href='#Slide1' className="">{name1}</a>
            <a onClick={() => { onClick ; }} href='#Slide2' className="">{name2}</a>
            <a onClick={() => { onClick ; }} href='#Slide3' className="">{name3}</a>
            <a onClick={() => { onClick ;  }} href='#Slide4' className="">{name4}</a>
            <a onClick={() => { onClick ; }} href='#Slide5' className="">{name5}</a>
        
                {/* <div
                    className={classNames({
                        controls: true,
                        active: active,
                })}
                >
                    <p>This is a test!!</p>
                </div> */}
                {/* <button onClick={handleToggle}>Show name</button>
                {active && <p>Coding Beauty</p>} */}
        </span>

	);
}