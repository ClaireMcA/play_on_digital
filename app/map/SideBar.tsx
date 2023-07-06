
interface Props {
    club: string,
    field: string,
    desc: string,
    img: string
}

export default function Sidebar({club, field, desc, img}: Props) {



return (
    <>
        <div className="p-6 gap-12 h-screen grid grid-rows-[1fr_4fr_1fr] grid-cols-1 items-start">
            <div className="h-60 w-60 bg-cover justify-self-center" style={{ backgroundImage: `url(/images/branding/Logo-Exhibition-White.png)` }}></div>
            <div className="grid gap-6">
                <h2 className="title text-6xl text-white">{club}</h2>
                <h3 className="secondaryTitle text-3xl text-white py-2">{field}</h3>
                <p className="text-white text-2xl ">{desc}</p>
                {/* <p className="text-white">/images/clubLogos/{img}</p> */}
            </div>
            <div className="justify-self-end self-end h-40 w-40 bg-contain bg-no-repeat" style={{ backgroundImage: `url(/images/clubLogos/${img})` }}></div>
        </div>
    </>
)

}