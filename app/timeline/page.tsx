'use client';
// import { Timeline } from '@knight-lab/timelinejs';
// import '@knight-lab/timelinejs/dist/css/timeline.css';
import './timeline.css'
import Timeline from './TimelineComponent';

export default function TimelinePage() {
<link title="timeline-styles" rel="stylesheet" href="https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css"></link>



  return (
    <main className="items-center bgDarkGrey">
      
      <h2 className='title text-size-2x h-screen w-screen'>We're Still working on this...</h2>
      <h1>This is a timeline</h1>
      <Timeline />
      <div>The end</div>
    </main>
  )
}
