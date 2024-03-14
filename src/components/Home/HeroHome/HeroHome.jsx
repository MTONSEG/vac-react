import React from "react";
import { SolidBtn } from "../../UI/Buttons/SolidBtn.jsx";
import './HeroHome.scss';
import { SliderHero } from "./SliderHero/SliderHero.jsx";

const HeroHome = ({ state }) => {

	let isTab = window.innerWidth > 992;

	return (
		<div className="hero">
			<div className="container">
				<div className="hero__row">
					<div className="hero__body">
						<h1 className="hero__title big-title">
							{state.title}
						</h1>

						{
							isTab ?
								<SolidBtn
									className="hero__btn btn_solid-white"
									title="Request a suv"
								/> : ''
						}
					</div>
					<div className="hero__slider slider-hero">
						<SliderHero images={state.slideImages} iconBtn={state.icon} />
					</div>

					{
						!isTab ?
							<SolidBtn
								className="hero__btn btn_solid-white"
								title="Request a suv"
							/> : ''
					}
				</div>
			</div>
		</div>
	)
}

export default HeroHome;