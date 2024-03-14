import React from "react";

const Picture = React.lazy(() => import('../../UI/Picture/Picture.jsx'));

// import { Picture } from "../../UI/Picture/Picture.jsx";
import './HowItWork.scss';

const HowItWork = ({ state }) => {
	let images = state.images;
	return (
		<div className="it-work">
			<div className="container container_full">
				<div className=""></div>
				<div className="it-work__body">
					<h1 className="it-work__title title">
						{state.title}
					</h1>
					<h2 className="it-work__subtitle">
						{state.subtitle}
					</h2>
					<p className="it-work__text text">
						{state.text}
					</p>
				</div>

				<Picture
					img={images.sedan.img}
					webp={images.sedan.webp}
					className="it-work__image it-work__image_sedan" />
				<Picture
					img={images.suv.img}
					webp={images.suv.webp}
					className="it-work__image it-work__image_suv" />
			</div>
		</div>
	)
}
export default HowItWork;