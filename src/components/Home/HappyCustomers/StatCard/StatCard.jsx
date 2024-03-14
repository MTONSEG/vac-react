import React from "react";
import './StatCard.scss';


export const StatCard = props => {
	return (
		<li className="happy-customers__item item-customers">
			<h1 className="item-customers__num title">
				{props.num}
			</h1>
			<p className="item-customers__text text">
				{props.text}
			</p>
		</li>
	)
}