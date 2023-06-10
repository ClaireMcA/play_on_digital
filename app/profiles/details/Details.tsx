import LearnMore from "./LearnMore";
import React, {useState} from "react"


interface Props {

}

export default function Selector(props:Props) {

    return (
        <div className="flex text-center items-center h-screen w-screen mx-auto">

        <LearnMore 
            id = {"LydiaWilliams"}
            secondaryImage = {"LydiaBlack"}
            title = {"Lydia Williams"}
            onField={"on Field"}
            offField={"off Field"}
            returnSlide={1}
            />

        <LearnMore 
            id = {"EllieCarpenter"}
            secondaryImage = {"EllieCarpenter"}
            title = {"Ellie Carpenter"}
            onField={"on Field Ellie"}
            offField={"off Field Ellie"}
            returnSlide={2}
            />

        <LearnMore 
            id = {"SamKerr"}
            secondaryImage = {"SamKerr"}
            title = {"Sam Kerr"}
            onField={"on Field Sam"}
            offField={"off Field Sam"}
            returnSlide={3}
            />

        <LearnMore 
            id = {"MichelleHeyman"}
            secondaryImage = {"MichelleHeyman"}
            title = {"Michelle Heyman"}
            onField={"on Field Michelle"}
            offField={"off Field Michelle"}
            returnSlide={4}
            />

        <LearnMore 
            id = {"HayleyRaso"}
            secondaryImage = {"HayleyRaso"}
            title = {"Hayley Raso"}
            onField={"on Field Hayley"}
            offField={"off Field Hayley"}
            returnSlide={5}
            />

        </div>

    )

}