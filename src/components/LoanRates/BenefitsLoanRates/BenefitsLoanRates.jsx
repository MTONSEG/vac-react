import React from "react";
import { SolidBtn } from "../../UI/Buttons/SolidBtn.jsx";
const Picture = React.lazy(() => import('../../UI/Picture/Picture.jsx'));
import './BenefitsLoanRates.scss';

export const BenefitsLoanRates = ({ state }) => {
	return (
		<article className="benefits-loan">
			<div className="benefits-loan__body">
				<h2 className="benefits-loan__title title">
					{state.title}
				</h2>
				<div className="benefits-loan__text-wrap">
					<p className="benefits-loan__text text">
						{state.text[0]}
					</p>
					<p className="benefits-loan__text text">
						{state.text[1]}
					</p>
				</div>
				<SolidBtn
					title={state.titleBtn}
					className="benefits-loan__btn btn_solid"
				/>
			</div>
			<div className="benefits-loan__image-wrap">
				<Picture
					className="benefits-loan__image"
					img={state.image.img}
					imgM={state.image.imgM}
					webp={state.image.webp}
					webpM={state.image.webpM}
					widthM='767'
				/>
			</div>
		</article>
	)
}