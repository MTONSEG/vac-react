import React from "react";
import '../../Quiz.scss';
import { ContinueQuizBtn } from "../../../UI/Buttons/ContinueQuizBtn/ContinueQuizBtn";
import { BackQuizBtn } from "../../../UI/Buttons/BackQuizBtn/BackQuizBtn";

export const AnswersQuiz = ({ state, result, setResult, ...props }) => {

	const onAnswerClickHandler = (e) => {
		let current = e.currentTarget;

		setResult({ ...result, [current.name]: current.value });
	}

	const onContinueClickHandler = () => { props.onContinueClick(props.next) };
	const onBackClickHandler = () => {
		props.onBackClick(props.prev, state.name)
	};
	return (
		<>
			<div className="answers-quiz">
				{
					state.answers.map(el => (
						<label className="answers-quiz__label"
							htmlFor={el.id}
							key={el.id}>
							<input
								type="radio"
								name={state.name}
								id={el.id}
								value={el.value}
								onClick={onAnswerClickHandler}
							/>
							<div className="answers-quiz__btn">
								{el.value}
							</div>
						</label>
					))
				}
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