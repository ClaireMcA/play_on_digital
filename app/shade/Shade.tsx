export default function Shade(){

    return (
     
     <div className="flex text-center items-center h-screen w-screen mx-auto">
        <video autoPlay className="z-0 place-self-center h-auto w-screen" controls loop muted>
                <source
                src="/videos/testVid.mp4"
                type="video/mp4"
                />
            </video>
    </div>

    )
}