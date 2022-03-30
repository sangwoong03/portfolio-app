import React from "react";
import "./About.css";
import sangwoong_sub from "../image/sangwoong_profile.jpg";

function AboutMe() {
	return (
		<div className="about__wrapper d-flex">
			<div className="about__img">
				<img src={sangwoong_sub} alt="aboutImage" />
			</div>

			<div className="about__content">
				<h2> About me </h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt in
					cupiditate! Est cupiditate, molestias dignissimos iusto impedit, ea
					sit ratione cum architecto amet facilis iste vitae! Itaque, nemo vel.
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
	);
}

export default AboutMe;
