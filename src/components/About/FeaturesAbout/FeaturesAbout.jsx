import React, {lazy} from "react";
const Picture = lazy(() => import('../../UI/Picture/Picture.jsx'));
import { StatCard } from "../../Home/HappyCustomers/StatCard/StatCard.jsx";
import './FeaturesAbout.scss';

const FeaturesAbout = ({ state }) => {
	let itemCustomers = state.cards.map((el, index) => (
		<StatCard
			key={index}
			num={el.num}
			text={el.text}
		/>
	))
	return (
		<article className="features-about">
			<div className="features-about__image-wrap">
				<Picture
					img={state.image.img}
					imgMob={state.image.imgM}
					webp={state.image.webp}
					webpM={state.image.webpM}
					widthMob="992"
					className="features-about__image"
				/>
			</div>
			<div className="features-about__body">
				<h1 className="features-about__title title">
					{state.title}
				</h1>
				<p className="features-about__text text">
					{state.text}
				</p>
				<ul className="features-about__list happy-customers__list">
						{itemCustomers}
					</ul>
			</div>
		</article>
	)
}

export default FeaturesAbout;