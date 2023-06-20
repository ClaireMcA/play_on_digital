import LearnMore from "./LearnMore";
import React, {useState} from "react"
import { playerDetails } from '../data';


interface Props {

}

export default function Selector(props:Props) {

    return (
        <div className="flex text-center items-center h-screen w-screen mx-auto">

        <LearnMore 
            firstName = {playerDetails.players[0].lastName}
            lastName = {playerDetails.players[0].lastName}
            onField={playerDetails.players[0].onField}
            onField2={playerDetails.players[0].onField2}
            offField={playerDetails.players[0].offField}
            returnSlide={playerDetails.players[0].returnSlide}
        />

        <LearnMore 
            firstName = {playerDetails.players[1].firstName}
            lastName = {playerDetails.players[1].lastName}
            onField={playerDetails.players[1].onField}
            onField2={playerDetails.players[1].onField2}
            offField={playerDetails.players[1].offField}
            returnSlide={playerDetails.players[1].returnSlide}
            />

        <LearnMore 
            firstName = {playerDetails.players[2].firstName}
            lastName = {playerDetails.players[2].lastName}
            onField={playerDetails.players[2].onField}
            onField2={playerDetails.players[2].onField2}
            offField={playerDetails.players[2].offField}
            returnSlide={playerDetails.players[2].returnSlide}
            />

        <LearnMore 
            firstName = {playerDetails.players[3].firstName}
            lastName = {playerDetails.players[3].lastName}
            onField={playerDetails.players[3].onField}
            onField2={playerDetails.players[3].onField2}
            offField={playerDetails.players[3].offField}
            returnSlide={playerDetails.players[3].returnSlide}
            />

        <LearnMore 
            firstName = {playerDetails.players[4].firstName}
            lastName = {playerDetails.players[4].lastName}
            onField={playerDetails.players[4].onField}
            onField2={playerDetails.players[4].onField2}
            offField={playerDetails.players[4].offField}
            returnSlide={playerDetails.players[4].returnSlide}
            />

        </div>

    )

}