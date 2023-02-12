import React, { Fragment } from 'react';
import './MobileMenu.css';

const MobileMenu = ({ handleToggleMenu, visible }) => {
	return (
		<Fragment>
			{visible && <div className="mobile-menu-backdrop"></div>}

			<div className={visible ? 'mobile-menu show' : 'mobile-menu hide'}>
				<div className="mobile-menu-btn-container">
					<button className="mobile-menu__close-btn" onClick={handleToggleMenu}>
						<img src="svgs/icon-menu-close.svg" alt="Close Icon" />
					</button>
				</div>
				<ul className="mobile-menu__ul">
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
			</div>
		</Fragment>
	);
};

export default MobileMenu;
