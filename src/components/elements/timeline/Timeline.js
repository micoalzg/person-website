import React from "react";
import Resume from "../../../resume.json";
import TimelineItem from "./timelineItem/TimelineItem.js";

function Timeline() {
	return (
		<div className="timeline is-centered">
      {Resume.timeline.map(item => {
        return <TimelineItem {...item}></TimelineItem>
      })}
		</div>
  )
}

export default Timeline;