import React, {lazy}  from "react";
const Picture = lazy(() => import('../../UI/Picture/Picture.jsx'));
import './DynamicTeamAbout.scss';

const DynamicTeamAbout = ({ state }) => {

	return (
		<article className="dynamic-team">
			<div className="dynamic-team__body">
				<h1 className="dynamic-team__title title">
					{state.title}
				</h1>
				<div className="dynamic-team__text-wrap">
					<h2 className="dynamic-team__subtitle">
						{state.textList.history.title}
					</h2>
					<p className="dynamic-team__text text">
						{state.textList.history.text}
					</p>
				</div>
				<div className="dynamic-team__text-wrap _last">
					<h2 className="dynamic-team__subtitle">
						{state.textList.goal.title}
					</h2>
					<p className="dynamic-team__text text">
						{state.textList.goal.text}
					</p>
				</div>
			</div>
			<div className="dynamic-team__image-wrap">
				<Picture
					img={state.image.img}
					webp={state.image.webp}
					imgTab={state.image.imgT}
					webpTab={state.image.webpT}
					// imgMob={state.image.imgM}
					// webpMob={state.image.webpM}
					widthTab="992"
					className="dynamic-team__image"
				/>
			</div>
		</article>
	)
}

export default DynamicTeamAbout;