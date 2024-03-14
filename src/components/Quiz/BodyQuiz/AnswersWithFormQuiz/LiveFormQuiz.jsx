import React, { useState } from "react";
import '../../Quiz.scss';
import { InputQuiz } from "./InputQuiz/InputQuiz";
import { ContinueQuizBtn } from "../../../UI/Buttons/ContinueQuizBtn/ContinueQuizBtn";
import { BackQuizBtn } from "../../../UI/Buttons/BackQuizBtn/BackQuizBtn";

export const LiveFormQuiz = ({ result, setResult, ...props }) => {

	let [street, setStreet] = useState('');
	let [city, setCity] = useState('');
	let [province, setProvince] = useState('');
	let [postal, setPostal] = useState('');


	const onContinueClick = () => {
		let addressObj = {
			[props.state.ph[1]]: street,
			[props.state.ph[2]]: city,
			[props.state.ph[3]]: province,
			[props.state.ph[4]]: postal,
		}

		setResult({ ...result, [props.state.name]: addressObj });
		props.checkProgress(props.next);
	}

	const onBackClickHandler = () => { props.onBackClick(props.prev, props.state.name) }

	return (
		<>
			<div className="form-quiz">
				<InputQuiz
					className="street"
					value={street}
					setValue={setStreet}
					placeholder={props.state.ph[1]}
					name={props.state.name}
				/>
				<InputQuiz
					className="city"
					value={city}
					setValue={setCity}
					placeholder={props.state.ph[2]}
					name={props.state.name}
				/>
				<InputQuiz
					className="province"
					value={province}
					setValue={setProvince}
					placeholder={props.state.ph[3]}
					name={props.state.name}
				/>
				<InputQuiz
					className="postal"
					value={postal}
					setValue={setPostal}
					placeholder={props.state.ph[4]}
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