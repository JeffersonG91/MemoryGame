import React from 'react';
import "./Header.css";
import animal from './animals.jpg';

const Header = props => (
	<header>
		<img className="animal" src={animal} alt={animal} />
		<div className="Header">
			<h1 className="Header-note">Click on every image just once!</h1>
		</div>
	</header>
);

export default Header;