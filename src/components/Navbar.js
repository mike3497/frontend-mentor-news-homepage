import React from 'react';
import './Navbar.css';

const Navbar = () => {
	return (
		<header className="navbar">
			<a href="#">
				<img src="svgs/logo.svg" alt="W. logo" />
			</a>
			<ul className="navbar__ul">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">New</a>
				</li>
				<li>
					<a href="#">Popular</a>
				</li>
				<li>
					<a href="#">Trending</a>
				</li>
				<li>
					<a href="#">Categories</a>
				</li>
			</ul>
		</header>
	);
};

export default Navbar;
