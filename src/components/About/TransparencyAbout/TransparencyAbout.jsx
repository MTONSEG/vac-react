import React, {lazy}  from "react";

const Picture = lazy(() => import('../../UI/Picture/Picture.jsx'));
import './TransparencyAbout.scss';

const TransparencyAbout = ({ state }) => {
	return (
		<div className="transparency-about">
			<div className="transparency-about__image-wrap">
				<Picture
					className="transparency-about__image"
					img={state.image.img}
					webp={state.image.webp}
					imgMob={state.image.imgM}
					webpMob={state.image.webpM}
					widthMob="797"
				/>
			</div>
			<article className="transparency-about__body">
				<h1 className="transparency-about__title title">
					{state.title}
				</h1>
				<div className="transparency-about__text-wrap">
					<p className="transparency-about__text text">
						{state.text[1]}
					</p>
					<p className="transparency-about__text text">
						{state.text[2]}
					</p>
				</div>
			</article>
		</div>
	)
}

export default TransparencyAbout;