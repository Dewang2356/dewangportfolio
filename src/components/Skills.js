import React from "react";

const Skills = (props) => {
	return (
		<div className="col-md-5" data-aos={props.anim}>
			<h3 className="my-3 fw-bold">
				<span className="edit">My</span> {props.name} skills
			</h3>
			<div className="skills my-4">
				<div className="upper">
					<p>{props.lang}</p>
					<p>{props.percent}/100</p>
				</div>
				<div className="lower">
					<div className="progress bg-dark" style={{ height: "5px" }}>
						<div
							className="progress-bar"
							role="progressbar"
							style={{ width: props.percent + "%" }}
							aria-valuenow="90"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
				</div>
			</div>
			<div className="skills my-4">
				<div className="upper">
					<p>{props.lang1}</p>
					<p>{props.percent1}/100</p>
				</div>
				<div className="lower">
					<div className="progress bg-dark" style={{ height: "5px" }}>
						<div
							className="progress-bar"
							role="progressbar"
							style={{ width: props.percent1 + "%" }}
							aria-valuenow="90"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
				</div>
			</div>
			<div className="skills my-4">
				<div className="upper">
					<p>{props.lang2}</p>
					<p>{props.percent2}/100</p>
				</div>
				<div className="lower">
					<div className="progress bg-dark" style={{ height: "5px" }}>
						<div
							className="progress-bar"
							role="progressbar"
							style={{ width: props.percent2 + "%" }}
							aria-valuenow="90"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
				</div>
			</div>
			<div className="skills my-4">
				<div className="upper">
					<p>{props.lang3}</p>
					<p>{props.percent3}/100</p>
				</div>
				<div className="lower">
					<div className="progress bg-dark" style={{ height: "5px" }}>
						<div
							className="progress-bar"
							role="progressbar"
							style={{ width: props.percent3 + "%" }}
							aria-valuenow="90"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
