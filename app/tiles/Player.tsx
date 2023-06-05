
interface Props {
    vidNum: number,
    exitClick: any;
}


function Player({vidNum, exitClick}: Props) {
    console.log("This is vidNum:");
    console.log(vidNum);

    var video = "/videos/Vid" + vidNum + ".mp4";

    return (
        <div className=" grid h-screen ">
            <button className="absolute left-0 top-0 h-10 w-10 z-10 m-5" type="button" onClick={exitClick}>
                <div className="w-full h-full bg-cover" style={{ backgroundImage: `url(/images/x-symbol.svg)` }}>

                </div>
            </button>
            <video autoPlay onEnded={exitClick} className="z-0 place-self-center h-screen w-full" controls>
                <source
                src={video}
                type="video/mp4"
                />
            </video>

        </div>

    )
}

export default Player;