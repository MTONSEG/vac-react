import React from "react";
import './StepItem.scss';

export const StepItem = props => {

	return (
		<li className="easy-steps__item item-steps">
			<div className="item-steps__icon-wrap">
				<img
					src={props.icon}
					alt={props.id}
					className="item-steps__icon" />
				<span className="item-steps__icon-num">
					{props.id}
				</span>
			</div>
			<div className="item-steps__body">
				<h2 className="item-steps__title">
					{props.title}
				</h2>
				<p className="item-steps__text text">
					{props.text}
				</p>
			</div>
		</li>
	)
}