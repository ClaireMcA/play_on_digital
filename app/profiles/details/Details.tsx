import LearnMore from "./LearnMore";
import React, {useState} from "react"


interface Props {

}

export default function Selector(props:Props) {

    return (
        <div className="flex text-center items-center h-screen w-screen mx-auto">

        <LearnMore 
            firstName = {"Lydia"}
            lastName = {"Williams"}
            onField={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, elit vel condimentum dictum, massa velit vehicula risus, a faucibus odio augue vel ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, elit vel condimentum dictum, massa velit vehicula risus, a faucibus odio augue vel ipsum."}
            onField2={"Lorem ipsum dolor sit amet, consectetur ipiscing elit. Sed imperdiet, elit velad condimentum dictum, massa velit vehicula risus, a faucibus odio augue vel ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, elit vel condimentum dictum, massa velit vehicula risus, a faucibus odio augue vel ipsum."}
            offField={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat vel sapien faucibus ultrices. Sed in nisl sit amet urna consectetur maximus. Praesent at iaculis enim. Integer at neque feugiat, fermentum ipsum vel, tincidunt libero. Mauris mollis porta scelerisque. Aenean felis elit, convallis in luctus id, faucibus vitae odio. Donec vel eros diam. Phasellus fermentum augue eget fermentum fringilla. Donec accumsan bibendum purus non ullamcorper. Proin porta tincidunt cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur id nulla augue. Nam ac tortor sit amet risus ultrices suscipit. Nunc lorem orci, pulvinar eu scelerisque in, facilisis et nisl. Etiam hendrerit suscipit magna ac elementum. Proin faucibus eget quam eget hendrerit. Ut scelerisque sagittis erat, in rhoncus eros sodales a. Maecenas vel elit magna."}
            returnSlide={1}
            />

        <LearnMore 
            firstName = {"Ellie"}
            lastName = {"Carpenter"}
            onField={"on Field Ellie"}
            onField2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, elit vel condimentum dictum, massa velit vehicula risus, a faucibus odio augue vel ipsum."}
            offField={"off Field Ellie"}
            returnSlide={2}
            />

        <LearnMore 
            firstName = {"Sam"}
            lastName = {"Kerr"}
            onField={"on Field Sam"}
            onField2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, elit vel condimentum dictum, massa velit vehicula risus, a faucibus odio augue vel ipsum."}
            offField={"off Field Sam"}
            returnSlide={3}
            />

        <LearnMore 
            firstName = {"Michelle"}
            lastName = {"Heyman"}
            onField={"on Field Michelle"}
            onField2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, elit vel condimentum dictum, massa velit vehicula risus, a faucibus odio augue vel ipsum."}
            offField={"off Field Michelle"}
            returnSlide={4}
            />

        <LearnMore 
            firstName = {"Hayley"}
            lastName = {"Raso"}
            onField={"on Field Hayley"}
            onField2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, elit vel condimentum dictum, massa velit vehicula risus, a faucibus odio augue vel ipsum."}
            offField={"off Field Hayley"}
            returnSlide={5}
            />

        </div>

    )

}