import React from "react";
import "./Contact.css";
import { Container, Row, Col } from "reactstrap";
import Form from "../Form/Form";

function Contact() {
	return (
		<section className="contact">
			<Container>
				<Row>
					<Col lg="12" className="mb-5">
						<h2> Contact ME </h2>
					</Col>

					<Col lg="6" md="6" className="contact__info">
						<div className="contact__info-container">
							<div className="contact__info-box ">
								<h6> Phone</h6>
								<p> +82-10-3770-7063</p>
							</div>
							<div className="contact__info-box ">
								<h6> GitHub </h6>
								<p>
									<a href="https://github.com/sangwoong03">@sangwoong03 </a>
								</p>
							</div>
						</div>

						<div className="contact__info-container">
							<div className="contact__info-box ">
								<h6> Email</h6>
								<p> sangwoong03@gmail.com </p>
							</div>
							<div className="contact__info-box ">
								<h6> Blog </h6>
								<p> setting... </p>
							</div>
						</div>
					</Col>
					<Col lg="6" md="6" className="contact__form">
						<Form />
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Contact;
