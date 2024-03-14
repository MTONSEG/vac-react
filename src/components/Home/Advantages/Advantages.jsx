import React from "react";
import './Advantages.scss';

const Advantages = ({ state }) => {

	let itemsList = state.list.map(elem => (
		<li
			key={elem.id}
			className="advantages__item">
			<div className="advantages__item-body">
				<img className="advantages__item-icon" src={elem.icon} alt={elem.title} />
				<h2 className="advantages__item-title">
					{elem.title}
				</h2>
				<p className="advantages__item-text text">
					{elem.text}
				</p>
			</div>
		</li>
	))

	return (
		<div className="advantages">
			<div className="container">
				<div className="advantages__row">
					<h1 className="advantages__title title">
						{state.title}
					</h1>

					<ul className="advantages__list">
						{itemsList}
					</ul>

				</div>
			</div>
		</div>
	)
}
export default Advantages;