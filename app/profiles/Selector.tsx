
import Display from "./Display"
import React from "react"


interface Props {

}

export default function Selector(props:Props) {

    return (
        <div className="slider text-center items-center h-screen w-screen mx-auto">
        <Display 
            imgName = {"LydiaBlack"}
            currentSlide={"Slide1"}
            prevSlide={"Slide5"}
            nextSlide={"Slide2"}
            title = {"Lydia Williams"}
            firstName = {"Lydia"}
            learnLink = {"/LydiaWilliams"}
            />
            <Display
            imgName = {"EllieCarpenter"}
            currentSlide={"Slide2"}            
            prevSlide={"Slide1"}
            nextSlide={"Slide3"}
            title = {"Ellie Carpenter"}
            firstName = {"Ellie"}
            learnLink = {"/LydiaWilliams"}
            />
            <Display 

            imgName = {"SamKerr"}
            currentSlide={"Slide3"}            
            prevSlide={"Slide2"}
            nextSlide={"Slide4"}
            title = {"Sam Kerr"}
            firstName = {"Sam"}
            learnLink = {"/LydiaWilliams"}
            />
            <Display
            imgName = {"MichelleHeyman"}
            currentSlide={"Slide4"}            
            prevSlide={"Slide3"}
            nextSlide={"Slide5"}
            title = {"Michelle Heyman"}
            firstName = {"Michelle"}
            learnLink = {"/LydiaWilliams"}
            />
            <Display 

            imgName = {"HayleyRasso"}
            currentSlide={"Slide1"}            
            prevSlide={"Slide5"}
            nextSlide={"Slide2"}
            title = {"Hayley Rasso"}
            firstName = {"Hayley"}
            learnLink = {"/LydiaWilliams"}
            />
            {/* <Display 
            onClick = {() => props.onClick(1)}
            imgName = {LydiaBlack}
            currentSlide={5}            
            prevSlide={4}
            nextSlide={1}
            title = {"Lydia Williams"}
            firstName = {"Lydia"}
            />
            <Display 
            onClick = {() => props.onClick(1)}
            imgName = {LydiaBlack}
            currentSlide={1}            
            prevSlide={5}
            nextSlide={2}
            title = {"Lydia Williams"}
            firstName = {"Lydia"}
            />
            <Display 
            onClick = {() => props.onClick(1)}
            imgName = {LydiaBlack}
            currentSlide={1}            prevSlide={5}
            nextSlide={2}
            title = {"Lydia Williams"}
            firstName = {"Lydia"}
            />
            <Display 
            onClick = {() => props.onClick(1)}
            imgName = {LydiaBlack}
            currentSlide={1}            
            prevSlide={5}
            nextSlide={2}
            title = {"Lydia Williams"}
            firstName = {"Lydia"}
            /> */}
        </div>

    )

}