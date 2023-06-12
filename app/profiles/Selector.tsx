
import Display from "./Display"
import React, {useState} from "react"


interface Props {

}

export default function Selector(props:Props) {
    const [currSlide, setCurrSlide] = useState<number>(1);
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50 

    const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')
    // add your conditional logic here

    return (
        <div className="flex text-center items-center h-screen w-screen mx-auto" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      
        <a onClick={() => {if (currSlide <= 1) {setCurrSlide(5)} else {setCurrSlide(currSlide-1); }}} href={'#Slide'+ (currSlide) } ><img src="/images/arrow.png" id="arrowLeft" className="absolute select-none top-1/2 left-6 md:left-12 xl:left-24 w-12 z-10 h-auto rotate-180"/></a>
        <a onClick={() => {if (currSlide >= 5) {setCurrSlide(1)} else {setCurrSlide(currSlide+1); }}} href={'#Slide'+ (currSlide) } ><img src="/images/arrow.png" id="arrowReft" className="absolute select-none top-1/2 right-6 md:right-12 xl:right-24 w-12 z-10 h-auto"/></a>

        <Display 
            imgName = {"LydiaBlack"}
            currentSlide={"Slide1"}
            prevSlide={"#Slide5"}
            nextSlide={"#Slide2"}
            title = {"Lydia Williams"}
            firstName = {"Lydia"}
            learnLink = {"#LydiaWilliams"}
            />
            <Display
            imgName = {"EllieCarpenter"}
            currentSlide={"Slide2"}            
            prevSlide={"#Slide1"}
            nextSlide={"#Slide3"}
            title = {"Ellie Carpenter"}
            firstName = {"Ellie"}
            learnLink = {"EllieCarpenter"}
            />

            <Display 

            imgName = {"SamKerr"}
            currentSlide={"Slide3"}            
            prevSlide={"#Slide2"}
            nextSlide={"#Slide4"}
            title = {"Sam Kerr"}
            firstName = {"Sam"}
            learnLink = {"SamKerr"}
            />

            <Display
            imgName = {"MichelleHeyman"}
            currentSlide={"Slide4"}            
            prevSlide={"#Slide3"}
            nextSlide={"#Slide5"}
            title = {"Michelle Heyman"}
            firstName = {"Michelle"}
            learnLink = {"MichelleHeyman"}
            />

            <Display 

            imgName = {"HayleyRaso"}
            currentSlide={"Slide5"}            
            prevSlide={"#Slide4"}
            nextSlide={"#Slide1"}
            title = {"Hayley Raso"}
            firstName = {"Hayley"}
            learnLink = {"HayleyRaso"}
            />
        </div>

    )

}