'use client';
import { Timeline } from '@knight-lab/timelinejs';
import '@knight-lab/timelinejs/dist/css/timeline.css';

export default function MapPage() {

  var additionalOptions = {
    // Starts at the end of the timeline
      start_at_end: true,
      
    // Height of the timeline navigation
      timenav_height: 175,

    // Timeline navigation in aligned to bottom
      timenav_position: "bottom",

    // Slide BG colour, currently set to yellow
     default_bg_color: "#FEC66A",

    // Enables the updating of the browser URL each time a slide advances, so that people can link directly to specific slides.
    hash_bookmark: true,
  }


  // new TL.Timeline('timeline-embed',
  // 'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml', additionalOptions);




  return (
    <>
      {/* <main className="items-center bgDarkGrey">
        <div id='timeline-embed h-full w-full'></div>
      </main>

      <script>
        // Details for timeline
            timeline = new TL.Timeline('timeline-embed', 'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml', additionalOptions);
      </script> */}

      <body className="bgDarkGrey">
        <div className="container mb-12 mx-auto">
          <section className="mb-32 text-white text-center">
            <div id='timeline-embed w-full h-full'></div>
 
            </section>
        </div>

        <script type="text/javascript">

        </script>

    </body> 




    </>
  )
}
