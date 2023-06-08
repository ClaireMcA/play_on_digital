'use client';


import Map from "./Map"
import SideBar from "./SideBar";

export default function MapPage() {
  return (
    <main className="items-center bgDarkGrey max-w-full w-screen grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-[2fr_1fr]">
      <Map/>
      <SideBar/>
    </main>
  )
}
