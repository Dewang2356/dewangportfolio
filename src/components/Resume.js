import React from "react";
import Skills from "./Skills";
const Resume = () => {
	return (
		<div className="container">
			<h3 className="my-3 fw-bold">
				<span className="edit">My</span> Interest
			</h3>
			<div className="row align-items-center justify-content-between mx-2">
				{/*<h1 className="mb-3 about">Resume</h1>*/}

				<div className="custom col-md-2" data-aos="fade-right">
					<i
						className="fa fa-music fa-2x hehe"
						style={{ color: "#00ADB5" }}
					></i>
					<p className="my-2">Listening Music</p>
				</div>
				<div className="custom col-md-2" data-aos="fade-up">
				<i class="fas fa-swimmer fa-2x" style={{ color: "#00ADB5" }}></i>
					
					<p className="my-2">Swimming</p>
				</div>
				<div className="custom col-md-2" data-aos="fade-down">
					<i
						className="fa fa-plane fa-2x"
						style={{ color: "#00ADB5" }}
					></i>
					<p className="my-2">Travelling</p>
				</div>
				<div className="custom col-md-2" data-aos="fade-left">
					<i
						className="fas fa-utensils fa-2x"
						style={{ color: "#00ADB5" }}
					></i>
					
					<p className="my-2">Foodie</p>
				</div>
			</div>
			<div className="row justify-content-between my-3">
				<Skills
					name="programming"
					lang="HTML"
					lang1="CSS"
					lang2="JAVASCRIPT"
					lang3="REACT"
					percent="90"
					percent1="75"
					percent2="87"
					percent3="50"
					anim="fade-right"
				/>
				<Skills
					name="developement"
					lang="Web developement"
					lang1="Frontend developement"
					lang2="Wordpress developement"
					lang3="Native applications"
					percent="95"
					percent1="80"
					percent2="70"
					percent3="85"
					anim="fade-left"
				/>
			</div>
		</div>
	);
};

export default Resume;
