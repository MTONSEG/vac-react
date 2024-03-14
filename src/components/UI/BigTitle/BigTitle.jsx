import React from "react";
import './BigTitle.scss';

export const BigTitle = props => {
	let style = (props.className) ? " " + props.className : ''

	return (
		<>
			<h1 className={'big-title' + style} style={{ margin: props.margin }}>{props.title}</h1>
		</>
	)
};