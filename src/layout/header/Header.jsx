import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<div className="logo">
				<img src="" alt="logo" />
			</div>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/categories">Category</NavLink>
					</li>
					<li>
						<NavLink to="/services">Services</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
