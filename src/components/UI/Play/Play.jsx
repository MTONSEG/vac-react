import React from "react";
import './Play.scss';

const Play = props => {
	return (
		<button className={
			props.className ?
				`${props.className} play` : "play"}
			onClick={props.onClickHandler}
		>
			<img src={props.icon} alt="play" />
		</button>
	);
}

export default Play;