import React from "react";
import { HeadQuiz } from "../HeadQuiz/HeadQuiz";
import '../Quiz.scss';

export const BodyQuiz = ({ state, children, ...props }) => {


	return (
		<>
			{
				props.finish
					? <img src={state.icon} alt="Success" className="quiz__success-icon" />
					: <></>
			}
			<HeadQuiz
				question={state.question}
				text={state.text}
			/>

			{children}

			
		</>

	)

}