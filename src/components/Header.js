import React from "react";
import img from "../Images/wedding.jpg";
import Typeit from "./Typeit";
import pdf from "../Images/CV_2021-10-25-070140.pdf";
const Header = () => {
	return (
		<>
			<div className={`container my-4`}>
				<div className="row align-items-center">
					<div className="col-md-6 mb-4">
						<img
							src={img}
							className="img-fluid stat"
							alt=""
							data-aos="flip-left"
						/>
					</div>
					<div className="col-md-6">
						<span className="fs-1 fw-bold">Hello👋,</span>

						<h1 className="fs-1 fw-bold mt-1">
							I Am{" "}
							<span style={{ color: "#00ADB5" }}>
								Dewang Seth
							</span>
						</h1>

						<h1 className="fs-1 fw-bold my-3">{<Typeit />}</h1>

						<div className="my-2">
							<p>
								18 Years Old from Amravati ( Maharashtra ). I
								currently live in Amravati - Pursuing my 12th in
								Brijilal Biyani College Amravati. Currently
								working as a freelancer . I have an experience
								as a Full stack web developer from past 1 years.
							</p>
							
						</div>
						<a href={pdf} className="mybtn mb-3 px-3 py-2" target="_dewang">DOWNLOAD CV</a>
						<div className="social d-flex my-4" data-aos="fade-up">
							<p>
								Follow Me <span className="fw-bold">:</span>
							</p>
							<a
								className="ico"
								href="https://www.facebook.com/dewang.seth.90"
								target="_dewang"
							>
								<i className="fab fa-facebook"></i>
							</a>
							<a
								className="ico"
								href="https://www.instagram.com/this_is_dewang/"
								target="_dewang"
							>
								<i className="fab fa-instagram"></i>
							</a>

							<a
								className="ico"
								href="https://github.com/Dewang2356"
								target="_dewang"
							>
								<i className="fab fa-github"></i>
							</a>
							<a
								className="ico"
								href="https://www.linkedin.com/in/dewang-seth-8149611b6/"
								target="_dewang"
							>
								<i className="fab fa-linkedin"></i>
							</a>
							<a
								className="ico"
								href="mailto: dewangseth.com@gmail.com"
								target="_dewang"
							>
								<i className="fa fa-envelope"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
