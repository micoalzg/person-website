import React, { useState } from "react";

function SkillItem(props) {

	const [value, setValue] = useState(props.experience);

	return (
		<div className="skill-item">
			<span className="title is-5 is-pulled-left is-spaced">{props.name}</span>
			<span className="subtitle is-6 is-pulled-right">{props.level}</span>
			<progress 
				className="progress is-medium is-info" 
				// data-label={value.toPrecision(4) + "%"} 
				max="100" 
				value={value}
				>
				{value}
			</progress>
		</div>
	)
}

export default SkillItem;