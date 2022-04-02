import React, { useState } from "react";
import "./Form.css";

function Form() {
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [msg, setMsg] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		console.log("submit");
	};

	return (
		<form action="" className="form__wrapper" onSubmit={submitHandler}>
			<fieldset>
				<div className="form__input username">
					<label htmlFor="username"> Your Name </label>
					<input
						id="username"
						type="text"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="form__input useremail">
					<label htmlFor="">Your Email </label>
					<input
						id="useremail"
						type="text"
						placeholder="Email"
						value={mail}
						onChange={(e) => setMail(e.target.value)}
					/>
				</div>
				<div className="form__input text d-flex flex-wrap">
					<label>Message</label>
					<textarea
						placeholder="Message"
						name=""
						id="text"
						cols="42"
						rows="5"
						value={msg}
						onChange={(e) => setMsg(e.target.value)}
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
