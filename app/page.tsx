import Image from 'next/image'
import Option from './Option'

export default function Home() {


  return (
    <main className="items-center bgDarkGrey">
        <div className="p-6 container h-screen max-w-full w-screen grid grid-rows-4 grid-cols-1 sm:grid-rows-3 sm:grid-cols-2 gap-6">
          <div className='col-span-2 bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url(/images/branding/Logo-PlayOn-Grey.png)` }}>

          </div>
          <Option 
            link = "/map"
            imgNum = {1}
            title = {"Interactive Map"}
            subtitle = {"Take a look at womens football clubs in Canberra!"}
          />
          <Option 
            link = "/profile"
            imgNum = {1}
            title = {"Player Profiles"}
            subtitle = {"Find out more about some important Aussie Players!"}
          />
          <Option 
            link = "https://playonexhibition.netlify.app/profiles.html"
            imgNum = {1}
            title = {"Timeline"}
            subtitle = {"Explore womens football clubs in Canberra through the years!"}
          />
          <Option 
            link = "/tiles"
            imgNum = {1}
            title = {"Video Tiles"}
            subtitle = {"Flick through some selfie videos"}
          />
        </div>
    </main>
  )
}
