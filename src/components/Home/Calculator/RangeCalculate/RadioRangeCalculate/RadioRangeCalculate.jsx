import React from "react";
import './RadioRangeCalculate.scss';


export const RadioRangeCalculate = ({ name, value, check, ...props }) => {

	const onChangeHandler = e => {
		props.setSelectedValue(e.target.value);
	}

	return (
		<label className={props.className}>
			<input
				type="radio"
				value={value}
				name={name}
				checked={check === value}
				onChange={props.setCheck}
			/>
			<span>{value}</span>
		</label>
	)
}