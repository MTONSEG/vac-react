import React from "react";
import './Buttons.scss';

export const SolidBtn = props => {
	let style = props.className ? (' ' + props.className) : '';

	const onClickHandler = (e) => {
		if (props.onClickHandler) {
			props.onClickHandler();
			e.preventDefault()
		}
	}

	return (
		<button
			href="#"
			className={'btn' + style}
			onClick={onClickHandler}
		>
			{props.title}
		</button>
	)
};