import React, { useState } from "react";
import '../../Quiz.scss';
import { InputQuiz } from "./InputQuiz/InputQuiz";
import { ContinueQuizBtn } from "../../../UI/Buttons/ContinueQuizBtn/ContinueQuizBtn";
import { BackQuizBtn } from "../../../UI/Buttons/BackQuizBtn/BackQuizBtn";

export const BornFormQuiz = ({ result, setResult, ...props }) => {

	let [yearValue, setYearValue] = useState('');
	let [monthValue, setMounthValue] = useState('');
	let [dayValue, setDayValue] = useState('');


	const onContinueClick = () => {
		let addressObj = {
			[props.state.ph[1]]: yearValue,
			[props.state.ph[2]]: monthValue,
			[props.state.ph[3]]: dayValue,
		}

		setResult({ ...result, [props.state.name]: addressObj });
		props.checkProgress(props.next);
	}

	const onBackClickHandler = () => { props.onBackClick(props.prev, props.state.name) }

	return (
		<>
			<div className="form-quiz">
				<InputQuiz
					className="year"
					value={yearValue}
					setValue={setYearValue}
					placeholder={props.state.ph[1]}
					name={props.state.name}
					type='number'
				/>
				<InputQuiz
					className="month"
					value={monthValue}
					setValue={setMounthValue}
					placeholder={props.state.ph[2]}
					name={props.state.name}
					type='number'
				/>
				<InputQuiz
					className="day"
					value={dayValue}
					setValue={setDayValue}
					placeholder={props.state.ph[3]}
					name={props.state.name}
					type='number'
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