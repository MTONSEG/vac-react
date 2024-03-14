import React from "react";
import './Buttons.scss';

export const MenuBtn = props => {
	let style = props.className ? ` ${props.className}` : '';

	const handleOnClick = () => props.setShowMenu(!props.showMenu);

	return (
		<div className="btn-menu"
			onClick={handleOnClick}
		>
			<span className="btn-menu__line"></span>
		</div>
	)
};