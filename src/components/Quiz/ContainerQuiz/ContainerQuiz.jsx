import React from "react";
import '../Quiz.scss';

export const ContainerQuiz = ({ children, ...props }) => {

	return (
		<div className="quiz">
			<div className="quiz__container">
				<div className="quiz__row">
					<div className="quiz__body">
						{children}
					</div>
				</div>
			</div>
		</div>
	)

}