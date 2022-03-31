import React from "react";
import "./Contact.css";
import { Container, Row, Col } from "reactstrap";

function Contact() {
	return (
		<section className="contact">
			<Container>
				<Row>
					<Col lg="12" className="mb-5">
						<h2> Contact ME </h2>
					</Col>

					<Col lg="6" md="6">
						<div className="contact__info-container d-flex gap-5">
							<div className="contact__info-box w-50">
								<h6> Phone</h6>
								<p> +82-10-3770-7063</p>
							</div>
							<div className="contact__info-box w-50">
								<h6> GitHub </h6>
								<p>
									<a href="https://github.com/sangwoong03">@sangwoong03 </a>
								</p>
							</div>
						</div>

						<div className="contact__info-container d-flex gap-5">
							<div className="contact__info-box w-50">
								<h6> Email</h6>
								<p> sangwoong03@gmail.com </p>
								<p> can7063@daum.net (sub) </p>
							</div>
							<div className="contact__info-box w-50">
								<h6> Address </h6>
								<p>Osan-no 77 (105-101), Osan-si,</p>
								<p>Gyunggi-do, Republic of Korea</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Contact;
