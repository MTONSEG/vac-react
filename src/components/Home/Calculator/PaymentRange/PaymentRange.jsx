import React from "react";
import { SolidBtn } from "../../../UI/Buttons/SolidBtn.jsx";
import './PaymentRange.scss';


export const PaymentRange = ({ state, ...props }) => {

	let items = state.map((elem, index) => (
		<li key={index} className="payment-range__item">
			<p className="payment-range__title text">
				{elem.title}
			</p>
			<p className="payment-range__value">
				{elem.value}
			</p>
		</li>
	))


	return (
		<div className={`${props.className} payment-range`}>
			<ul className="payment-range__list">
				{items}
			</ul>

			<SolidBtn
				title={props.titleBtn ? props.titleBtn : "Request a car"}
				className="payment-range__btn btn_solid"
			/>
		</div>
	)
}