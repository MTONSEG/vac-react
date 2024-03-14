import React from "react";
import { Link } from "react-router-dom";
import '../Buttons.scss';

export const ContinueQuizBtn = ({ children, ...props }) => {

	return (
		<Link to={`/quiz/${props.next}`}
			className={props.className ? `${props.className} btn btn_solid` : 'btn btn_solid'}
			onClick={props.onContinueClick}
		>
			continue
		</Link>
	)
};




