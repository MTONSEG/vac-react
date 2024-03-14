import React from "react";
import './CarPage.scss';
import { Header } from "../../UI/Header/Header.jsx";
import { CarPageSlider } from "./CarPageSlider/CarPageSlider.jsx";
import { SolidBtn } from "../../UI/Buttons/SolidBtn.jsx";
import { Calculator } from "../../Home/Calculator/Calculator.jsx";

export const CarPage = ({ state, ...props }) => {
	let modalState = props.stateModals;

	const listTop = state.topList.map((el, i) => (
		<li className="card-body__item-top" key={i}>
			<p className="card-body__title-top">
				{el.title}
			</p>
			<p className="card-body__value-top">
				{el.value}
			</p>
		</li>
	))

	const listBottom = state.detail.map((el, i) => (
		<li className="card-body__item-bottom" key={i}>
			{el}
		</li>
	))
	return (
		<>
			<Header
				mod='apply'
				logo={modalState.logo}
				showMenu={modalState.showMenu}
				setShowMenu={modalState.setShowMenu}
				showRequest={modalState.showRequest}
				setShowRequest={modalState.setShowRequest}
			/>
			<div className="card">
				<div className="container">
					<div className="card__row">
						<div className="card__images">
							<h1 className="card__title title">
								{state.title}
							</h1>
							<p className="card__subtitle">
								{state.subtitle}
							</p>
							<CarPageSlider
								state={state.slides}
							/>
							<SolidBtn
								title="apply for this vehicle"
								className="card__apply-btn btn_solid"
							/>
						</div>
						<div className="card__body card-body">
							<ul className="card-body__list-top">
								{listTop}
							</ul>

							<div className="card-body__bottom">
								<p className="card-body__title-bottom">
									Detail
								</p>

								<ul className="card-body__list-bottom">
									{listBottom}
								</ul>
							</div>
							<div className="card-body__description">
								<h2 className="card-body__title-description">
									Description
								</h2>
								<p className="card-body__text-description text">
									{state.description}
								</p>
								<SolidBtn
									title={state.titleBtn}
									className="card-body__btn btn_solid"
								/>
							</div>
						</div>
					</div>
					<div className="card__calc">
						<Calculator
							cardType={true}
							state={state.calc}
							price={state.price}
							className="calc-page-margin"
						/>
					</div>
				</div>
			</div>
		</>
	);
}