import React from "react";
import { SolidBtn } from "../../UI/Buttons/SolidBtn.jsx";
import './HappyCustomers.scss';
import { StatCard } from "./StatCard/StatCard.jsx";


const HappyCustomers = ({ state }) => {
	let width = window.innerWidth;

	let itemCustomers = state.cards.map((el, index) => (
		<StatCard
			key={index}
			num={el.num}
			text={el.text}
		/>
	))

	return (
		<div className="happy-customers">
			<div className="container">
				<div className="happy-customers__row">
					<div className="happy-customers__body">
						<h1 className="happy-customers__title title">
							{state.title}
						</h1>
						<p className="happy-customers__text text">
							{state.text}
						</p>
						{
							width > 992 ?
								<>
									<h2 className="happy-customers__subtitle">
										{state.subtitle}
									</h2>
									<SolidBtn
										title="Request a Car"
										className="happy-customers__btn btn_solid"
									/>
								</> : ''
						}
					</div>
					<ul className="happy-customers__list">
						{itemCustomers}
					</ul>
					{
						width <= 992 ?
							<>
								<h2 className="happy-customers__subtitle">
									{state.subtitle}
								</h2>
								<SolidBtn
									title="Request a Car"
									className="happy-customers__btn btn_solid"
								/>
							</> : ''
					}
				</div>
			</div>
		</div>
	)
}

export default HappyCustomers;