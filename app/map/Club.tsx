
interface Props {
    club: string,
    field: string,
    desc: string,
    img: string
}

export default function Club({club, field, desc, img}: Props) {



return (
    <>
        <div className="p-6 gap-6 h-screen grid grid-rows-[1fr_3fr_1fr] grid-cols-1 items-start">
            <div className="h-40 w-40 bg-cover justify-self-center" style={{ backgroundImage: `url(/images/branding/Logo-Exhibition-White.png)` }}></div>
            <div>
                <h2 className="title text-4xl text-white">{club}</h2>
                <h3 className="secondaryTitle text-white py-2">{field}</h3>
                <p className="text-white">{desc}</p>
            </div>
            <div className="justify-self-end h-36 w-min bg-contain bg-no-repeat" style={{ backgroundImage: `url(/images/clubLogos/${img})` }}></div>
        </div>
    </>
)

}