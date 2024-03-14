import React, { useState } from "react";
import '../../Quiz.scss';
import { InputQuiz } from "./InputQuiz/InputQuiz";
import { ContinueQuizBtn } from "../../../UI/Buttons/ContinueQuizBtn/ContinueQuizBtn";
import { BackQuizBtn } from "../../../UI/Buttons/BackQuizBtn/BackQuizBtn";

export const ReceivingStepQuiz = ({ result, setResult, ...props }) => {

	let [timeValue, setTimeValue] = useState('');


	const onContinueClick = () => {
		setResult({ ...result, [props.state.name]: timeValue });
		props.checkProgress(props.next);
	}

	const onBackClickHandler = () => { props.onBackClick(props.prev, props.state.name) }

	return (
		<>
			<div className="form-quiz">
				<InputQuiz
					value={timeValue}
					setValue={setTimeValue}
					placeholder={props.state.ph[1]}
					name={props.state.name}
				/>
			</div>
			<div className="buttons-quiz">
				<ContinueQuizBtn
					className="buttons-quiz__continue"
					next={props.next}
					onContinueClick={onContinueClick} />
				{
					props.prev
						? <BackQuizBtn
							className="buttons-quiz__back"
							prev={props.prev}
							onBackClick={onBackClickHandler} />
						: <></>
				}
			</div>
		</>
	)

}