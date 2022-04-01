import React from "react";
import "./Form.css";

function Form() {
	return (
		<form action="" className="form__wrapper">
			<fieldset>
				<div className="form__input username">
					<label htmlFor="username"> Your Name </label>
					<input id="username" type="text" placeholder="name" />
				</div>
				<div className="form__input useremail">
					<label htmlFor="">Your Email </label>
					<input id="useremail" type="text" placeholder="email" />
				</div>
				<div className="form__input text d-flex flex-wrap">
					<label>Message</label>
					<textarea
						placeholder="message"
						name=""
						id="text"
						cols="42"
						rows="5"
					></textarea>
				</div>
			</fieldset>
			<button className="submit__btn" type="submit">
				Send
			</button>
		</form>
	);
}
export default Form;
