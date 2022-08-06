import React from "react";
import SkillItem from "../../elements/skillItem/SkillItem";
import Resume from "../../../resume.json";

function Skills() {
	return (
		<section className="" id="skills">
			<div className="container">
				<h1 className="title has-text-left">Current Skill Level</h1>
				<div className="">
				<img src="https://img.icons8.com/nolan/64/code.png"></img>
					<h2 className="title is-4">Languages</h2>
				</div>
				{Resume.skills.map(skill => {
					return <SkillItem {...skill}></SkillItem>
				})}
			</div>
		</section>
	)
}

export default Skills;