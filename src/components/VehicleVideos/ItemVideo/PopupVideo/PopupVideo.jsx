import React, { useEffect } from "react";
import loadingLogo from '../../../../assets/icons/loading_logo.svg';
import './PopupVideo.scss';

const PopupVideo = props => {

	useEffect(() => {
		document.body.style.overflow = props.activeVideo ? 'hidden' : 'auto';
	}, [props.activeVideo])

	return (
		<div className={
			props.activeVideo ?
				"popup-video active" : "popup-video"}
			onClick={props.onClickPlayHandler}
		>
			<button className="popup-video__close-btn">
				<img src="" alt="" />
			</button>

			<div className={
				props.activeVideo ?
					"popup-video__container active" : "popup-video__container"}
				onClick={e => { e.stopPropagation() }}
			>
				<div className="popup-video__loading">
					<img src={loadingLogo} alt="loading" />
					<p>Loading...</p>
				</div>

				<iframe
					src={props.video}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					loading="lazy"></iframe>


			</div>
		</div>
	);
}

export default PopupVideo;