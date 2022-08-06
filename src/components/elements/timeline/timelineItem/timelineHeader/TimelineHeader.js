import React from "react";

function TimelineHeader(props) {
	return (
		<header className="timeline-header">
			<span className="tag is-primary">{props.title}</span>
		</header>
  );
}

export default TimelineHeader;