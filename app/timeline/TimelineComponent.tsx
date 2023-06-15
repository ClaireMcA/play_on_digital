
import React, {useState} from "react"
import './index.js'


interface Props {

}

export default function Timeline() {

    const start_at_end = true;
    const timenav_height = 175;
    const timenav_position = "bottom";
    const default_bg_color = "#FEC66A";
    const hash_bookmark = true;
    
   
    return (
        // <div className="flex text-center items-center h-screen w-screen mx-auto" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}></div>
        <div className="flex text-center items-center h-screen w-screen mx-auto">
         <script type="module" src="https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js"></script>
         <div id='timeline-embed' className='timeline'></div>

         </div>

    )

}