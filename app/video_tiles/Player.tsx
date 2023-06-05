import Logo from './x-symbol.svg'
// import { ReactComponent as ExitButton } from './x-symbol.svg'

interface Props {
    vidNum: number,
    exitClick: any;
}


function Player({vidNum, exitClick}: Props) {
    console.log("This is vidNum:");
    console.log(vidNum);

    var video = "/videos/Vid" + {vidNum }+ ".mp4";

    return (
        <div className="relative grid h-screen w-screen">
            <button className="absolute bg-white left-0 top-0 h-16 w-16 z-10 m-4" type="button" onClick={exitClick}>
                <svg className="h-full w-full h-10" fill="white" xmlns={Logo}/>
            </button>
            <video autoPlay className="z-0 place-self-center h-full w-full" controls>
                <source
                src='/videos/Vid3.mp4'
                type="video/mp4"
                // alt="Video by Nathan J Hilton: https://www.pexels.com/video/a-person-pouring-tea-into-a-black-ceramic-cup-16560417/"  
                />
            </video>

        </div>

    )
}

export default Player;