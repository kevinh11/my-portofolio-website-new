import VertTimeline from "../components/vertTimeline.jsx"
import React from 'react'

function TimelinePage() {
  return (
    <div data-aos="fade-right">
     <h1 className="my-5 text-2xl md:text-4xl">My Experience</h1>
     <div className="timeline-page flex page flex-col items-center justify-center">
      <div className="my-8">
        <VertTimeline></VertTimeline>
      </div>
    </div>
    </div>
   
  )
}
export default TimelinePage