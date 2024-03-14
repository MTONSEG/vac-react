import React from "react";
import { SolidBtn } from "../../UI/Buttons/SolidBtn.jsx";
import './BestPricesAbout.scss';

const BestPricesAbout = ({ state }) => {
	return (
		<article className="best-prices">
			<div className="best-prices__left">
				<h2 className="best-prices__title title">
					{state.title}
				</h2>
				<div className="best-prices__text-wrap">
					<p className="best-prices__text text">
						{state.text[1]}
					</p>
					<p className="best-prices__text text">
						{state.text[2]}
					</p>
				</div>
			</div>
			<div className="best-prices__right">
				<div className="best-prices__text-wrap">
					<p className="best-prices__text _bold text">
						{state.text[3]}
					</p>
					<p className="best-prices__text text">
						{state.text[4]}
					</p>
				</div>
				<SolidBtn
					title={state.titleBtn}
					className="best-prices__btn btn_solid"
				/>
			</div>
		</article>
	)
}

export default BestPricesAbout;