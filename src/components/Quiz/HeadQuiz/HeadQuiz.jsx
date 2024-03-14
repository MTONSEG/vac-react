import React from "react";
import '../Quiz.scss';

export const HeadQuiz = props => {

	return (
		<div className="quiz__head">
			<h1 className="quiz__question">
				{props.question}
			</h1>
			{
				props.text
					? <p className="quiz__text">{props.text}</p>
					: <></>
			}
		</div>

	)

}