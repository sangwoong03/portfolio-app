import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Project.css";

const projectData = [
	{
		title: "Web-App Development",
		icon: "ri-qr-code-line",
		desc: "I have to fill this form and both urls. The First project that I made is this web-site of the Siban Company. This site consists of html and css mainly with a bit of javascript code.",
		giturl: "",
		mainurl: "",
	},
	{
		title: "React-App Development",
		icon: "ri-reactjs-line",
		desc: "I have to fill this form and both urls. The First project that I made is this web-site of the Siban Company. This site consists of html and css mainly with a bit of javascript code.",
		giturl: "",
		mainurl: "",
	},
	{
		title: "Algorithm Solutions",
		icon: "ri-shape-line",
		desc: "I have to fill this form and both urls. The First project that I made is this web-site of the Siban Company. This site consists of html and css mainly with a bit of javascript code.",
		giturl: "",
		mainurl: "",
	},
];

function Projects() {
	const PjItem = ({ title, icon, desc, giturl, mainurl }) => (
		<Col lg="4" md="6" sm="6" className="mb-4">
			<div className="project__wrap">
				<span className="project__icon">
					<i class={icon}></i>
				</span>

				<h2> {title} </h2>
				<p> {desc.length > 100 ? `${desc.slice(0, 100)}...` : desc} </p>
			</div>
		</Col>
	);

	return (
		<section className="project">
			<Container>
				<Row>
					<Col lg="12" className="project__title mb-5">
						<h2> Projects </h2>
						<p>
							There are various projects in
							<a href="https://github.com/sangwoong03"> github.com</a>
						</p>
					</Col>

					{projectData.map((item, index) => (
						<PjItem
							key={index}
							title={item.title}
							icon={item.icon}
							desc={item.desc}
						/>
					))}
				</Row>
			</Container>
		</section>
	);
}

export default Projects;
