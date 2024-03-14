import React from "react";
import { Link } from "react-router-dom";
import '../../Quiz.scss';

export const FinishStepQuiz = ({ state, ...props }) => {

	return (
		<>
			<div className="form-quiz finish">
				<p className="form-quiz__confirm-title">
					Confirmation number:
				</p>
				<div className="form-quiz__input finish-inp">
					{state.confirmData.num}
				</div>
			</div>
			<div className="buttons-quiz">

				<Link to="/"
					className="buttons-quiz__main btn btn_solid"
				>
					Go to main page
				</Link>
			</div>
		</>
	)

}