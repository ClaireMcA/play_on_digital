'use client';


import Map from "./Map"
import SideBar from "./SideBar";
import Club from "./Club";

export default function MapPage() {
  return (
    <main className="items-start bgDarkGrey max-w-full w-screen grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-[2fr_1fr]">
      <Map/>
      <Club
        club = {"Belwest"}
        ground = {"Latham Playing Fields"}
        desc = {"Belwest Foxes is  community based volunteer run soccer club based in Latham ACT."}
        img = {"belwest.png"}
      />
    </main>
  )
}
