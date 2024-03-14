import React, { useState, lazy } from "react";
const Picture = lazy(() => import('../../UI/Picture/Picture.jsx'));
const Play = lazy(() => import('../../UI/Play/Play.jsx'));
const PopupVideo = lazy(() => import('./PopupVideo/PopupVideo.jsx'));

import './ItemVideo.scss';


const ItemVideo = props => {
	let [activeVideo, setActiveVideo] = useState(false)

	const onClickPlayHandler = () => setActiveVideo(!activeVideo);

	return (
		<>
			<li className="videos__item item-videos">
				<div className={
					activeVideo ?
						"item-videos__video-wrap active" :
						"item-videos__video-wrap"
				}>
					<Picture
						img={props.poster.img}
						webp={props.poster.webp}
						className='item-videos__poster'
					/>
					<Play
						className="item-videos__play"
						icon={props.icon}
						onClickHandler={onClickPlayHandler}
					/>
				</div>
				<h2 className="item-videos__title">{props.title}</h2>
			</li>

			<PopupVideo
				video={props.video}
				activeVideo={activeVideo}
				setActiveVideo={setActiveVideo}
				onClickPlayHandler={onClickPlayHandler}
			/>
		</>
	);
}

export default ItemVideo;