import React, { useState } from "react";
import './Checkbox.scss';



export const Checkbox = props => {

	let [isActive, setIsActive] = useState(false);

	const handleChange = () => { setIsActive(!isActive) };

	return (
		<label className="checkbox">
			<input
				type="checkbox"
				aria-label="checkbox"
				className="checkbox__input"
				checked={isActive}
				onChange={handleChange}
			/>
			<span className="checkbox__custom"></span>
			<p className="checkbox__text">
				{
					props.icon
						? <img src={props.icon} alt="" className="checkbox__icon" />
						: ''
				}
				<span>{props.text}</span>
			</p>
		</label>
	)
}