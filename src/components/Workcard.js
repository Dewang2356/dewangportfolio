import React from "react";

const Workcard = (props) => {
	return (
		<div className="col-md-4 my-3">
			<div className="card">
				<img src={props.dashboard} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p
						className="card-text"
						style={{ textTransform: "capitalize" }}
					>
						{props.description}
					</p>
					<a
						href={props.link}
						target="_dewang"
						className="btn btn-primary"
					>
						Read More
					</a>
				</div>
			</div>
		</div>
	);
};

export default Workcard;
