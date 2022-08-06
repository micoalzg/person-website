import React from 'react';

function SocialIcon(props) {
	return (
		<a className="social" href={props.href} target="_blank" rel="noopener noreferrer">
				<svg 
						style={{ fill: "currentColor" }}
						className="icon" 
						role="img" 
						viewBox="0 0 25 25" 
						xmlns="http://www.w3.org/2000/svg">
							<title>{props.title}</title>
							<path d={props.url}></path>
				</svg>
		</a>
	)
}

export default SocialIcon;