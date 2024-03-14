import React from "react";
const Picture = React.lazy(() => import('../../UI/Picture/Picture.jsx'));
import './EasySteps.scss';
import { StepItem } from "./StepItem/StepItem.jsx";

const EasySteps = ({ state }) => {
	let listSteps = state.list.map(elem => (
		<StepItem
			key={elem.id}
			id={elem.id}
			title={elem.title}
			text={elem.text}
			icon={elem.icon}
		/>
	));

	return (
		<div className="easy-steps">
			<div className="container">
				<h1 className="easy-steps__title title">
					{state.title}
				</h1>
				
				<div className="easy-steps__row">
					<ul className="easy-steps__list">
						{listSteps}
					</ul>
					<div className="easy-steps__image-wrap">
						<Picture
							img={state.image.img}
							webp={state.image.webp}
							imgMob={state.image.imgM}
							webpMob={state.image.webpM}
							imgTab={state.image.imgT}
							webpTab={state.image.webpT}
							widthMob="767"
							widthTab="992"
							className="easy-steps__image" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default EasySteps;