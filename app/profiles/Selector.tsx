
import Display from "./Display"
import React, {useState} from "react"
import { playerDetails } from './data';
import Controls from "./CarouselControl/page"



interface Props {

}

export default function Selector(props:Props) {
    const [currSlide, setCurrSlide] = useState<number>(1);


    return (
      <div className="flex text-center items-center h-screen w-screen mx-auto">
        <a
          onClick={() => {
            if (currSlide <= 1) {
              setCurrSlide(5);
            } else {
              setCurrSlide(currSlide - 1);
            }
          }}
          href={"#Slide" + currSlide}
        >
          <img
            src="/images/arrow.png"
            id="arrowLeft"
            className="absolute select-none top-1/2 left-6 md:left-12 xl:left-24 w-12 z-10 h-auto rotate-180"
          />
        </a>
        <a
          onClick={() => {
            if (currSlide >= 5) {
              setCurrSlide(1);
            } else {
              setCurrSlide(currSlide + 1);
            }
          }}
          href={"#Slide" + currSlide}
        >
          <img
            src="/images/arrow.png"
            id="arrowRight"
            className="absolute select-none top-1/2 right-6 md:right-12 xl:right-24 w-12 z-10 h-auto"
          />
        </a>

        <Display
          firstName={playerDetails.players[0].firstName}
          lastName={playerDetails.players[0].lastName}
          currentSlide={playerDetails.players[0].currentSlide}
          prevSlide={playerDetails.players[0].prevSlide}
          nextSlide={playerDetails.players[0].nextSlide}
        />
        

        <Display
          firstName={playerDetails.players[1].firstName}
          lastName={playerDetails.players[1].lastName}
          currentSlide={playerDetails.players[1].currentSlide}
          prevSlide={playerDetails.players[1].prevSlide}
          nextSlide={playerDetails.players[1].nextSlide}
        />

        <Display
          firstName={playerDetails.players[2].firstName}
          lastName={playerDetails.players[2].lastName}
          currentSlide={playerDetails.players[2].currentSlide}
          prevSlide={playerDetails.players[2].prevSlide}
          nextSlide={playerDetails.players[2].nextSlide}
        />

        <Display
          firstName={playerDetails.players[3].firstName}
          lastName={playerDetails.players[3].lastName}
          currentSlide={playerDetails.players[3].currentSlide}
          prevSlide={playerDetails.players[3].prevSlide}
          nextSlide={playerDetails.players[3].nextSlide}
        />

        <Display
          firstName={playerDetails.players[4].firstName}
          lastName={playerDetails.players[4].lastName}
          currentSlide={playerDetails.players[4].currentSlide}
          prevSlide={playerDetails.players[4].prevSlide}
          nextSlide={playerDetails.players[4].nextSlide}
        />
      </div>
    );

}