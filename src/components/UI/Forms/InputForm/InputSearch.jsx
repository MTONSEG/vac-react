import React, { useRef, useState } from "react";
import './InputForm.scss';

export const InputSearch = props => {
	let [newTextInput, setNewTextInput] = useState('');
	let current = useRef(null);

	const handleOnChangeInput = e => { setNewTextInput(e.currentTarget.value) }

	return (
		<div className="input-wrapper input-wrapper_search">
			{
				props.icon
					? <img src={props.icon} alt='icon' />
					: ''
			}
			<input
				ref={current}
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
			/>
		</div>
	)
}