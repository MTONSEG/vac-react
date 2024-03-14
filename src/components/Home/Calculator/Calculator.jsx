import React, { useState } from "react";
import './Calculator.scss';
import { PaymentRange } from "./PaymentRange/PaymentRange.jsx";
import { RangeCalculate } from "./RangeCalculate/RangeCalculate.jsx";


const Calculator = ({ state, ...props }) => {

	let [loanAmount, setLoanAmount] = useState(state.loanAmount.default);
	let [loanDuration, setLoanDuration] = useState(state.loanDuration.default)

	return (
		<div className={props.className ?
			`calculator ${props.className}` : 'calculator'
		}>
			<div className="container">
				<div className="calculator__head">
					<h1 className=
						{
							props.cardType
								? "calculator__title calculator__title_card title"
								: "calculator__title title"
						}
					>
						{state.title}
					</h1>
					{
						props.cardType
							? ''
							: <p className="calculator__text text">{state.text}</p>
					}
				</div>
				<div className={
					props.cardType
						? "calculator__body calculator__body_card"
						: "calculator__body"
				}
				>
					<RangeCalculate
						className={
							props.cardType
								? "calculator__range calculator__range_card"
								: "calculator__range"
						}
						price={props.price}
						state={state}
						loanAmount={loanAmount}
						setLoanAmount={setLoanAmount}
						loanDuration={loanDuration}
						setLoanDuration={setLoanDuration}
					/>
					<PaymentRange
						className={
							props.cardType
								? "calculator__payment calculator__payment_card"
								: "calculator__payment"
						}
						state={state.payments}
						titleBtn={state.titleBtn}
					/>
				</div>
			</div>
		</div>
	)
}

export default Calculator;