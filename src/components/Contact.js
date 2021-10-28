import React from "react";

const Contact = () => {
	return (
		<div className="container my-sm-5">
			<h2 className="about">Contact Me</h2>
			<div className="row align-items-center justify-content-center">
				<div className="col-md-6 my-3">
					<div className="iframe-container">
						<iframe
							className="map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.925052514486!2d77.74765334232977!3d20.920330871261957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU1JzEzLjMiTiA3N8KwNDQnNTEuNiJF!5e0!3m2!1sen!2sin!4v1635220081823!5m2!1sen!2sin"
							width="500"
							height="450"
							title="LMAO"
							style={{ border: "0" }}
							allowfullscreen=""
							loading="lazy"
						></iframe>
					</div>
				</div>
				<div className="col-md-6">
					<form
						action="https://formspree.io/f/xpzkeoyw"
						method="POST"
					>
						<input
							type="text"
							class="form-control bg-transparent text-light my-3"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Name"
							autocomplete="off"
							name="name"
							required
						/>
						<input
							type="email"
							class="form-control bg-transparent text-light my-3"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Email"
							autocomplete="off"
							name="email"
							required
						/>
						<input
							type="number"
							class="form-control bg-transparent text-light my-3"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Phone"
							autocomplete="off"
							name="phone"
							required
						/>
						<textarea
							class="form-control bg-transparent text-light my-3"
							id="exampleFormControlTextarea1"
							rows="3"
							placeholder="Message"
							name="message"
							required
						></textarea>
						<button type="Submit" className="mybtn my-3">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
