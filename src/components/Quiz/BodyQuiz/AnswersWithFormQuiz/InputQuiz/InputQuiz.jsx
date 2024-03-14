import React, { useState } from "react";
import '../../../Quiz.scss';

export const InputQuiz = props => {

	const onChangeHandler = (e) => {
		props.setValue(e.currentTarget.value)
	}

	return (
		<>
			<input
				className={props.className ? `${props.className} form-quiz__input` : "form-quiz__input"}
				type={
					props.type ? props.type : 'text'
				}
				value={props.value}
				placeholder={props.placeholder}
				onChange={onChangeHandler} 
				name={props.name}
				/>
		</>
	)
}