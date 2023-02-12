import React, { Fragment, useState } from 'react';
import MobileMenu from './MobileMenu';
import './Navbar.css';

const Navbar = () => {
	const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

	const handleToggleMenu = () => {
		setMobileMenuVisible(!mobileMenuVisible);
	};

	return (
		<Fragment>
			<div className="navbar">
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
				<button className="navbar__open-btn" onClick={handleToggleMenu}>
					<img src="svgs/icon-menu.svg" alt="Open Icon" />
				</button>
			</div>
			<MobileMenu
				handleToggleMenu={handleToggleMenu}
				visible={mobileMenuVisible}
			/>
		</Fragment>
	);
};

export default Navbar;
