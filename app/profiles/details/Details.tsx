import LearnMore from "./LearnMore";
import React, {useState} from "react"
import { playerDetails } from '../data';


interface Props {

}

export default function Selector(props:Props) {

    return (
        <div className="flex text-center items-center h-screen w-screen mx-auto">

        <LearnMore 
            firstName = {playerDetails.players[0].firstName}
            lastName = {playerDetails.players[0].lastName}
            club={playerDetails.players[0].club}
            position={playerDetails.players[0].position}
            jersey={playerDetails.players[0].jersey}
            retired={playerDetails.players[0].retired}
            imageName = {playerDetails.players[0].imageName}
            leftButton={playerDetails.players[0].leftButton}
            rightButton={playerDetails.players[0].rightButton}
            leftText={playerDetails.players[0].leftText}
            leftText2={playerDetails.players[0].leftText2}
            rightText={playerDetails.players[0].rightText}
            rightText2={playerDetails.players[0].rightText2}
            returnSlide={playerDetails.players[0].returnSlide}
        />

        <LearnMore 
            firstName = {playerDetails.players[1].firstName}
            lastName = {playerDetails.players[1].lastName}
            club={playerDetails.players[1].club}
            position={playerDetails.players[1].position}
            jersey={playerDetails.players[1].jersey}
            retired={playerDetails.players[1].retired}
            imageName = {playerDetails.players[1].imageName}
            leftButton={playerDetails.players[1].leftButton}
            rightButton={playerDetails.players[1].rightButton}
            leftText={playerDetails.players[1].leftText}
            leftText2={playerDetails.players[1].leftText2}
            rightText={playerDetails.players[1].rightText}
            rightText2={playerDetails.players[1].rightText2}
            returnSlide={playerDetails.players[1].returnSlide}
            />

        <LearnMore 
            firstName = {playerDetails.players[2].firstName}
            lastName = {playerDetails.players[2].lastName}
            club={playerDetails.players[2].club}
            position={playerDetails.players[2].position}
            jersey={playerDetails.players[2].jersey}
            retired={playerDetails.players[2].retired}
            imageName = {playerDetails.players[2].imageName}
            leftButton={playerDetails.players[2].leftButton}
            rightButton={playerDetails.players[2].rightButton}
            leftText={playerDetails.players[2].leftText}
            leftText2={playerDetails.players[2].leftText2}
            rightText={playerDetails.players[2].rightText}
            rightText2={playerDetails.players[2].rightText2}
            returnSlide={playerDetails.players[2].returnSlide}
            />

        <LearnMore 
            firstName = {playerDetails.players[3].firstName}
            lastName = {playerDetails.players[3].lastName}
            club={playerDetails.players[3].club}
            position={playerDetails.players[3].position}
            jersey={playerDetails.players[3].jersey}
            retired={playerDetails.players[3].retired}
            imageName = {playerDetails.players[3].imageName}
            leftButton={playerDetails.players[3].leftButton}
            rightButton={playerDetails.players[3].rightButton}
            leftText={playerDetails.players[3].leftText}
            leftText2={playerDetails.players[3].leftText2}
            rightText={playerDetails.players[3].rightText}
            rightText2={playerDetails.players[3].rightText2}
            returnSlide={playerDetails.players[3].returnSlide}
            />

        <LearnMore 
            firstName = {playerDetails.players[4].firstName}
            lastName = {playerDetails.players[4].lastName}
            club={playerDetails.players[4].club}
            position={playerDetails.players[4].position}
            jersey={playerDetails.players[4].jersey}
            retired={playerDetails.players[4].retired}
            imageName = {playerDetails.players[4].imageName}
            leftButton={playerDetails.players[4].leftButton}
            rightButton={playerDetails.players[4].rightButton}
            leftText={playerDetails.players[4].leftText}
            leftText2={playerDetails.players[4].leftText2}
            rightText={playerDetails.players[4].rightText}
            rightText2={playerDetails.players[4].rightText2}
            returnSlide={playerDetails.players[4].returnSlide}
            />

        </div>

    )

}