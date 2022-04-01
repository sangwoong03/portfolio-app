import React from "react";
import "./About.css";

function AboutMe() {
	const swImgSub = "../assets/sangwoong_profile.jpg";

	return (
		<div className="about__wrapper d-flex">
			<div className="about__img">
				<img src={swImgSub} alt="aboutImage" />
			</div>

			<div className="about__content">
				<h2> About me </h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt in
					cupiditate! Est cupiditate, molestias dignissimos iusto impedit, ea
					sit ratione cum architecto amet facilis iste vitae! Itaque, nemo vel.
				</p>
			</div>
		</div>
	);
}

export default AboutMe;
