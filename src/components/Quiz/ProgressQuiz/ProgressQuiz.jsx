import React from "react";
import '../Quiz.scss';

export const ProgressQuiz = props => {

	return (
		<div className={props.className ? `${props.className} quiz__progress` : "quiz__progress"}>
			<div
				className="quiz__progress-thumb"
				style={{
					width: `${props.width}%`
				}}
			></div>
		</div>
	)

}