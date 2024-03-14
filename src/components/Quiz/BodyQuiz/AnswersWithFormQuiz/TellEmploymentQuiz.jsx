import React, { useState } from "react";
import '../../Quiz.scss';
import { InputQuiz } from "./InputQuiz/InputQuiz";
import { ContinueQuizBtn } from "../../../UI/Buttons/ContinueQuizBtn/ContinueQuizBtn";
import { BackQuizBtn } from "../../../UI/Buttons/BackQuizBtn/BackQuizBtn";

export const TellEmploymentQuiz = ({ result, setResult, ...props }) => {


	let [employerValue, setEmployerValue] = useState('');
	let [titleValue, setTitleValue] = useState('');


	const onContinueClick = () => {
		let addressObj = {
			[props.state.ph[1]]: employerValue,
			[props.state.ph[2]]: titleValue,
		}

		setResult({ ...result, [props.state.name]: addressObj });
		props.checkProgress(props.next);
	}

	const onBackClickHandler = () => { props.onBackClick(props.prev, props.state.name) }
	return (
		<>
			<div className="form-quiz">
				<InputQuiz
					value={employerValue}
					setValue={setEmployerValue}
					placeholder={props.state.ph[1]}
					name={props.state.name}
				/>
				<InputQuiz
					value={titleValue}
					setValue={setTitleValue}
					placeholder={props.state.ph[2]}
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