
interface Props {
    club: string,
    ground: string,
    desc: string,
    img: string
}

export default function Club({club, ground, desc, img}: Props) {



return (
    <>
        <div className="m-6 items-start">
            <div className="h-36 w-36 bg-cover" style={{ backgroundImage: `url(/images//${img})` }}></div>
            <div className="h-36 w-36 bg-cover" style={{ backgroundImage: `url(/images/clubLogos/${img})` }}></div>
            <h2 className="title text-4xl text-white">{club}</h2>
            <h3 className="secondaryTitle text-white py-2">{ground}</h3>
            <p className="text-white">{desc}</p>
        </div>
    </>
)

}