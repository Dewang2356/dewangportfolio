import React from "react";

import dashboard from "../Images/dashboard.png";
import todolist from "../Images/todolist.png";
import button from "../Images/button.png";
import calculator from "../Images/calculator.png";
import hexcode from "../Images/hexcode.png";
import password from "../Images/password.png";
import Workcard from "./Workcard";
const Services = () => {
	return (
		<div className="container my-4">
			<h2 className="mb-3 about">Some of my past projects</h2>
			<div className="row">
				<Workcard
					dashboard={dashboard}
					title="Dashboard"
					description="A simple dashboard UI using html css and javascript with dark mode table and charts"
					link="https://dewang2356.github.io/DewangDashboard.github.io/"
				/>
				<Workcard
					dashboard={todolist}
					title="Todo list"
					description="A simple Todo list web app using html css and javascript with localstorage"
					link="https://dewang2356.github.io/"
				/>
				<Workcard
					dashboard={button}
					title="CSS button generator"
					description="CSS button generator using html and javascript with live button preview and css code"
					link="https://dewang2356.github.io/CSS-Button-Generator.github.io/"
				/>
				<Workcard
					dashboard={calculator}
					title="Calculator"
					description="A simple calculator using html and javascript with dark mode and neourphosim effect"
					link="https://dewang2356.github.io/Calculator.github.io/"
				/>
				<Workcard
					dashboard={hexcode}
					title="Random hexcode generator"
					description="Random hexcode generator using html and javascript with copy paste functionality"
					link="https://dewang2356.github.io/RandomHexCodeGenerator.github.io/"
				/>
				<Workcard
					dashboard={password}
					title="Password strength indicator"
					description="Password strength indicator using html and javascript with animations"
					link="https://dewang2356.github.io/Password-Strength-Indicator.github.io/"
				/>
			</div>
		</div>
	);
};

export default Services;
