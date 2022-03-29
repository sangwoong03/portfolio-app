import React, { useRef, useEffect } from "react";
import "./MainSection.css";
import { init } from "ityped";
import { Container, Row, Col } from "reactstrap";
import sangwoong_main from "../image/sw_photo_1.jpg";

function MainSection() {
	const textRef = useRef();

	useEffect(() => {
		init(textRef.current, {
			backDelay: 1500,
			showCursor: true,
			strings: ["Front-end Developer", "Back-end Developer"],
		});
	}, []);

	return (
		<section className="main__section">
			<Container>
				<Row>
					<Col lg="6" md="6">
						<div className="main__content">
							<p> WELCOME! </p>
							<h5> Hi </h5>
							<h2 className="main__title">
								I'm <span ref={textRef}> </span>
							</h2>
							<p className="summary">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
								accusamus quasi iure alias nam, pariatur molestiae autem aut
								magni non, dolores illum voluptates voluptate adipisci
								praesentium illo! Beatae, quam cum?
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
							<img src={sangwoong_main} alt="myImage" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default MainSection;
