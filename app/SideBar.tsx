
interface Props {
    club: string,
    field: string,
    desc: string,
    img: string
}

export default function Sidebar({club, field, desc, img}: Props) {



return (
    <>
        <div className="p-6 gap-3 h-screen grid grid-rows-[1fr_4fr_1fr] grid-cols-1 items-start">
            <div className="w-32 h-32 bg-cover bg-no-repeat justify-self-center" style={{ backgroundImage: `url(/images/branding/Logo-Exhibition-White.png)` }}></div>
            <div className="grid gap-1">
                <h2 className="title text-xl text-white">{club}</h2>
                <h3 className="secondaryTitle text-base text-white py-2">{field}</h3>
                <p className="text-white text-sm ">{desc}</p>
                {/* <p className="text-white">/images/clubLogos/{img}</p> */}
            </div>
            <div className="justify-self-end self-end w-28 h-28 bg-contain bg-no-repeat" style={{ backgroundImage: `url(/images/clubLogos/${img})` }}></div>
        </div>
    </>
)

}