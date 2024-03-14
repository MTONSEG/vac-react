import React from "react";
import './TermsLoanRates.scss';

export const TermsLoanRates = ({ state }) => {
	let items = state.list.map((el, index) => (
		<li className="terms-loan__item" key={index}>
			<h3 className="terms-loan__item-title">
				{el.title}
				<img
					className="terms-loan__item-icon"
					src={el.icon} alt="percent" />
			</h3>
			<p className="terms-loan__text text">
				{el.text}
			</p>
		</li>
	))

	return (
		<div className="terms-loan">
			<h2 className="terms-loan__title title">
				{state.title}
			</h2>
			<ul className="terms-loan__list">
				{items}
			</ul>
		</div>
	)
}