
import Display from "./Display"
import React, {useState} from "react"
import { playerDetails } from './data';



interface Props {

}

export default function Selector(props:Props) {
    const [currSlide, setCurrSlide] = useState<number>(1);


    return (
        <div className="flex text-center items-center h-screen w-screen mx-auto">
      
        <a onClick={() => {if (currSlide <= 1) {setCurrSlide(5)} else {setCurrSlide(currSlide-1); }}} href={'#Slide'+ (currSlide) } ><img src="/images/arrow.png" id="arrowLeft" className="absolute select-none top-1/2 left-6 md:left-12 xl:left-24 w-12 z-10 h-auto rotate-180"/></a>
        <a onClick={() => {if (currSlide >= 5) {setCurrSlide(1)} else {setCurrSlide(currSlide+1); }}} href={'#Slide'+ (currSlide) } ><img src="/images/arrow.png" id="arrowRight" className="absolute select-none top-1/2 right-6 md:right-12 xl:right-24 w-12 z-10 h-auto"/></a>

        <Display 
            firstName = {"Lydia"}
            lastName = {"Williams"}
            currentSlide={"Slide1"}
            prevSlide={"#Slide5"}
            nextSlide={"#Slide2"}
            />

            <Display
            firstName = {"Ellie"}
            lastName = {"Carpenter"}
            currentSlide={"Slide2"}            
            prevSlide={"#Slide1"}
            nextSlide={"#Slide3"}
            />

            <Display 
            firstName = {"Sam"}
            lastName = {"Kerr"}
            currentSlide={"Slide3"}            
            prevSlide={"#Slide2"}
            nextSlide={"#Slide4"}
            />

            <Display
            firstName = {"Michelle"}
            lastName = {"Heyman"}        
            currentSlide={"Slide4"}            
            prevSlide={"#Slide3"}
            nextSlide={"#Slide5"}
            />

            <Display 
            firstName = {"Hayley"}
            lastName = {"Raso"}
            currentSlide={"Slide5"}            
            prevSlide={"#Slide4"}
            nextSlide={"#Slide1"}
            />
        </div>

    )

}