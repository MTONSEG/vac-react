import React, { useState } from "react";
import '../../Quiz.scss';
import { InputQuiz } from "./InputQuiz/InputQuiz";
import { ContinueQuizBtn } from "../../../UI/Buttons/ContinueQuizBtn/ContinueQuizBtn";
import { BackQuizBtn } from "../../../UI/Buttons/BackQuizBtn/BackQuizBtn";

export const LastStepQuiz = ({ result, setResult, ...props }) => {

	let [nameValue, setNameValue] = useState('');
	let [lastNameValue, setLastNameValue] = useState('');
	let [mailValue, setMailValue] = useState('');
	let [phoneValue, setPhoneValue] = useState('');


	const onContinueClickHandler = () => {
		let addressObj = {
			[props.state.ph[1]]: nameValue,
			[props.state.ph[2]]: lastNameValue,
			[props.state.ph[3]]: mailValue,
			[props.state.ph[4]]: phoneValue,
		}

		setResult({ ...result, [props.state.name]: addressObj });
	}

	const onBackClickHandler = () => { props.onBackClick(props.prev, props.state.name) }

	return (
		<>
			<div className="form-quiz">
				<InputQuiz
					className="name"
					value={nameValue}
					setValue={setNameValue}
					placeholder={props.state.ph[1]}
					name={props.state.name}
				/>
				<InputQuiz
					className="last-name"
					value={lastNameValue}
					setValue={setLastNameValue}
					placeholder={props.state.ph[2]}
					name={props.state.name}
				/>
				<InputQuiz
					value={mailValue}
					setValue={setMailValue}
					placeholder={props.state.ph[3]}
					name={props.state.name}
					type='email'
				/>
				<InputQuiz
					value={phoneValue}
					setValue={setPhoneValue}
					placeholder={props.state.ph[4]}
					name={props.state.name}
					type='tel'
				/>
			</div>
			<div className="buttons-quiz">
				<ContinueQuizBtn
					className="buttons-quiz__continue"
					next={props.next}
					onContinueClick={onContinueClickHandler} 
					/>
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