import React, { useRef, useState } from "react";
import './InputForm.scss';

export const InputForm = props => {
	let [newTextInput, setNewTextInput] = useState('');
	let current = useRef(null);

	const handleOnChangeInput = e => { setNewTextInput(e.currentTarget.value) }

	let type = 'text';
	if (props.type) type = props.type;

	return (
		<div className="input-wrapper">
			{
				props.icon
					? <img src={props.icon} alt='icon' />
					: ''
			}
			<input
				ref={current}
				style={
					props.icon
						? {}
						: { paddingLeft: "20px" }
				}
				type={
					props.type ? `${props.type}` : 'text'
				}
				className={
					props.className
						? `${props.className} input`
						: 'input'
				}
				name={props.name}
				aria-label={props.name}
				placeholder={props.placeholder}
				value={newTextInput}
				onChange={handleOnChangeInput}
				onBlur={
					(e) => {
						if (newTextInput == '') {
							e.currentTarget.style.borderColor = '#F54E4E';
						} else {
							e.currentTarget.style.borderColor = ''
						}
					}}
			/>
		</div>
	)
}