import React from "react";
import "./About.css";
import { Container, Col, Row } from "reactstrap";
import sangwoong_sub from "../image/sangwoong_profile.jpg";

function About() {
	return (
		<section className="about">
			<Container>
				<Row>
					<Col lg="12" className="mb-5">
						<h2>About Me</h2>
					</Col>

					<Col lg="4" md="3">
						<div className="about__btns d-flex flex-column align-items-center justify-content-center">
							<button className="about__btn">About Me</button>
							<button className="about__btn">Education</button>
							<button className="about__btn">Experiences</button>
							<button className="about__btn">Skills</button>
						</div>
					</Col>

					<Col lg="8" md="9">
						<div className="about__wrapper d-flex">
							<div className="about__img">
								<img src={sangwoong_sub} alt="aboutImage" />
							</div>

							<div className="about__content">
								<h2> About me </h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
									sunt in cupiditate! Est cupiditate, molestias dignissimos
									iusto impedit, ea sit ratione cum architecto amet facilis iste
									vitae! Itaque, nemo vel.
								</p>
								<div className="social__links">
									<h6 className="mb-3">Connect with me</h6>
									<span>
										<a href="#">
											<i class="ri-github-line"></i>
										</a>
									</span>
									<span>
										<a href="#">
											<i class="ri-instagram-line"></i>
										</a>
									</span>
									<span>
										<a href="#">
											<i class="ri-linkedin-line"></i>
										</a>
									</span>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default About;
