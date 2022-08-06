import React from "react";
import TimelineHeader from "./timelineHeader/TimelineHeader";
import TimelineSubHeader from "./timelineSubHeader/TimelineSubHeader";

function TimelineItem(props) {
	if (props.type === "header") {
		return <TimelineHeader title={props.title}></TimelineHeader>
	} else if (props.type === "sub-header") {
		return <TimelineSubHeader title={props.title}></TimelineSubHeader>
	} else if (props.type === "job"){
		return (
			<div className="timeline-item" style={{textAlign: "initial"}}>
				<div className="timeline-marker is-info is-icon">
					<i className="fa fa-plus"></i>
				</div>
				<div className="timeline-content">
					<p className="heading">{props.startDate}{props.endDate ? ' - ' + props.endDate : ""}</p>
					<h2 className="title is-4">{props.position ? props.position + " at " + props.company: ""}</h2>
					<p>{props.summary}</p>
				</div>
			</div>
		)
	} else {
		return (
			<div className="timeline-item">
				<div className="timeline-marker is-info">
				</div>
				<div className="timeline-content">
				</div>
			</div>
		)
	}
}

export default TimelineItem;