import React, { useRef, useEffect } from "react";
import "./MainSection.css";
import { init } from "ityped";
import { Container, Row, Col } from "reactstrap";

function MainSection() {
	const swImgMain = "../assets/sw_photo_1.jpg";

	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			backDelay: 1500,
			showCursor: true,
			strings: ["Sangwoong", "Studying for Full-Stack Developer"],
		});
	}, []);

	return (
		<section className="main__section">
			<Container>
				<Row>
					<Col lg="6" md="6">
						<div className="main__content">
							<h2 className="main__title">
								<span ref={textRef}> </span>
							</h2>
							<p className="summary">
								The question <strong>"Why?"</strong> is so important for us, in
								our life. <br />
								While being as a leader in various types of team including Army,
								<br />
								I found the importance of Q("Why?") to all circumstance and
								things. <br />
								Even if I can get enough informations of programming over the
								internet,
								<br />I want to be a developer who know{" "}
								<strong>"Why" and "How"</strong> I write source codes.
							</p>
							<div className="main__btns d-flex align-items-center gap-4">
								<button className="btn hire__btn">
									<a href="https://github.com/sangwoong03"> Hire Me</a>
								</button>
								<button className="btn">Contact</button>
							</div>
						</div>
					</Col>

					<Col>
						<div className="main__img">
							<img src={swImgMain} alt="myImage" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default MainSection;
