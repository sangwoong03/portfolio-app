import React, { useState } from "react";
import "./About.css";
import { Container, Col, Row } from "reactstrap";
import Education from "./Education";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Experience from "./Experience";

function About() {
	const [abtFilter, setAbtFitler] = useState("");

	const aboutFilter = (e) => {
		setAbtFitler(e.target.outerText);
	};

	const aboutChanger = () => {
		switch (abtFilter) {
			case "About me":
				return <AboutMe />;
			case "Education":
				return <Education />;
			case "Skills":
				return <Skills />;
			case "Experiences":
				return <Experience />;
			default:
				return <AboutMe />;
		}
	};

	return (
		<section className="about">
			<Container>
				<Row>
					<Col lg="12" className="mb-5">
						<h2 className="about__title">About</h2>
					</Col>

					<Col lg="4" md="3">
						<div className="about__btns d-flex flex-column align-items-center justify-content-center">
							<button className="about__btn" onClick={aboutFilter}>
								About Me
							</button>
							<button className="about__btn" onClick={aboutFilter}>
								Education
							</button>
							<button className="about__btn" onClick={aboutFilter}>
								Experiences
							</button>
							<button className="about__btn" onClick={aboutFilter}>
								Skills
							</button>
						</div>
					</Col>
					<Col lg="8" md="9">
						{aboutChanger()}
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default About;
