import React, { useState } from "react";
import { InputRange } from "./InputRange/InputRange.jsx";
import { RadioRangeCalculate } from "./RadioRangeCalculate/RadioRangeCalculate.jsx";
import './RangeCalculate.scss';


export const RangeCalculate = props => {

	let [radioValue, setRadioValue] = useState('poor');

	const onChangeRadioHandle = e => { setRadioValue(e.target.value) }

	return (
		<div className={`${props.className} calc-range`}>
			<div className="calc-range__filter">
				<RadioRangeCalculate
					className="calc-range__radio"
					name="radio-range-calc"
					value='poor'
					check={radioValue}
					setCheck={onChangeRadioHandle}
				/>
				<RadioRangeCalculate
					className="calc-range__radio"
					name="radio-range-calc"
					value='average'
					check={radioValue}
					setCheck={onChangeRadioHandle}
				/>
				<RadioRangeCalculate
					className="calc-range__radio"
					name="radio-range-calc"
					value='good'
					check={radioValue}
					setCheck={onChangeRadioHandle}
				/>
			</div>
			<div className="calc-range__inputs">
				<InputRange
					price={props.price}
					max={props.state.loanAmount.max}
					title={props.state.loanAmount.title}
					loan={props.loanAmount}
					setLoan={props.setLoanAmount}
				/>
				<InputRange
					type="month"
					max={props.state.loanDuration.max}
					title={props.state.loanDuration.title}
					loan={props.loanDuration}
					setLoan={props.setLoanDuration}
				/>
			</div>

		</div>
	)
}