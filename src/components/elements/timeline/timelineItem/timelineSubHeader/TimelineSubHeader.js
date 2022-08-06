import React from "react";

function TimelineSubHeader(props) {
	return (
		<header className="timeline-header">
			<span className="tag is-primary">{props.title}</span>
		</header>
  );
}

export default TimelineSubHeader;