import React from "react";
import img from "../Images/mirror.jpg";
import {Link} from 'react-router-dom'
const About = () => {
	return (
		<>
			<div className="container my-sm-5">
				<h2 className="mb-3 about">About Me</h2>
				<div className="row align-items-center">
					<div className="col-md-4 mb-4" data-aos="zoom-in">
						<img
							src={img}
							className="img-fluid"
							style={{
								height: "auto",
								borderWidth: "5px !important",
							}}
							alt=""
						/>
					</div>

					<div className="col-md-4">
						<div className="details" data-aos="fade-up">
							<p className="fw-bold mb-4">
								Name :{" "}
								<span className="fw-light">Dewang Seth</span>
							</p>
							<p className="fw-bold mb-4">
								Date of birth :{" "}
								<span className="fw-normal">23-11-2004</span>
							</p>
							<p className="fw-bold mb-4">
								Phone :{" "}
								<span className="fw-normal">
									<a
										href="tel:8600725443"
										style={{
											textDecoration: "none",
											color: "#00ADB5",
										}}
									>
										+91 8600725443
									</a>
								</span>
							</p>
							<p className="fw-bold mb-4">
								Nationality :{" "}
								<span className="fw-normal">INDIAN</span>
							</p>
							<p className="fw-bold mb-4">
								Marital Status :{" "}
								<span className="fw-normal">Single</span>
							</p>
						</div>

					</div>

					<div className="col-md-4">
						<div className="details" data-aos="fade-down">
							<p className="fw-bold mb-4">
								Freelance :{" "}
								<span className="fw-normal">Availiable</span>
							</p>
							<p className="fw-bold mb-4">
								Email :{" "}
								<span className="fw-normal">
									<a
										href="mailto:dewangseth.com@gmail.com"
										style={{
											textDecoration: "none",
											color: "#00ADB5",
										}}
									>
										dewangseth.com@gmail.com
									</a>
								</span>
							</p>
							<p className="fw-bold mb-4">
								Address :{" "}
								<span className="fw-normal">Amravati</span>
							</p>
							<p className="fw-bold mb-4">
								Gender : <span className="fw-normal">Male</span>
							</p>
							<p className="fw-bold mb-4">
								Work Status :{" "}
								<span className="fw-normal">Freelancer</span>
							</p>
						</div>

					</div>
<div className="col-md-12 d-flex justify-content-sm-center">
					<Link className="mybtn me-4 mb-3 px-3 py-2" to="/resume">RESUME</Link>
					<Link className="mybtn mb-3 px-3 py-2" to="/contact">HIRE ME</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
