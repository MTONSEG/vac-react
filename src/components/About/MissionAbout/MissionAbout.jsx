import React, {lazy}  from "react";
import { SolidBtn } from "../../UI/Buttons/SolidBtn.jsx";
const Picture = lazy(() => import('../../UI/Picture/Picture.jsx'));
import './MissionAbout.scss';

const MissionAbout = ({ state }) => {
	return (
		<div className="mission-about">
			<article className="mission-about__body">
				<h1 className="mission-about__title title">
					{state.title}
				</h1>
				<p className="mission-about__text text">
					{state.text}
				</p>
				<SolidBtn
					title={state.btnTitle}
					className="mission-about__btn btn_solid" />
			</article>
			<div className="mission-about__image-wrap">
				<Picture
					className="mission-about__image"
					img={state.image.img}
					webp={state.image.webp}
					imgMob={state.image.imgM}
					webpMob={state.image.webpM}
					widthMob="797"
				/>
			</div>
		</div>
	)
}

export default MissionAbout;