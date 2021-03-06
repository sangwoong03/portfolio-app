import React from "react";
import "./Skills.css";

function Skills() {
	const feSkills = [
		{
			title: "Html5 & Css3",
			percentage: "85%",
		},
		{
			title: "Javascript",
			percentage: "60%",
		},
		{
			title: "React_JS",
			percentage: "30%",
		},
	];

	const beSkills = [
		{
			title: "Node.JS",
			percentage: "10%",
		},
		{
			title: "Django",
			percentage: "10%",
		},
		{
			title: "Flask",
			percentage: "10%",
		},
	];

	const idSkills = [
		{
			title: "Leadership",
			percentage: "90%",
		},
		{
			title: "English",
			percentage: "80%",
		},
		{
			title: "MS Office",
			percentage: "80%",
		},
	];

	const SkillItem = ({ title, percentage, level }) => {
		return (
			<div className="skill__data">
				<div className="skill__title">
					<h6>{title}</h6>
					<span>{percentage}</span>
				</div>
				<div className="skill__bar">
					<span
						className="skill__bar-percentage"
						style={{ width: `${percentage}` }}
					></span>
				</div>
			</div>
		);
	};

	return (
		<div className="skills__wrapper d-flex align-items-center">
			<div className="front-end__skill w-50">
				{feSkills.map((item, index) => (
					<SkillItem
						key={index}
						title={item.title}
						percentage={item.percentage}
					/>
				))}
			</div>
			<div className="back-end__skill w-50">
				{beSkills.map((item, index) => (
					<SkillItem
						key={index}
						title={item.title}
						percentage={item.percentage}
					/>
				))}
			</div>
			<div className="back-end__skill w-50">
				{idSkills.map((item, index) => (
					<SkillItem
						key={index}
						title={item.title}
						percentage={item.percentage}
						level={item.level}
					/>
				))}
			</div>
		</div>
	);
}

export default Skills;
