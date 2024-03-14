import React from "react";
import './Buttons.scss';

export const LinerBtn = props => {

	let style = props.className ? ` ${props.className}` : ''

	return (
		<button
			href="#"
			className={'btn btn_liner' + style}
			onClick={e => { e.preventDefault() }}
		>
			<span>{props.title}</span>
		</button>
	)
};