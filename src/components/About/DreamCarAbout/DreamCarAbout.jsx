import React from "react";
import './DreamCarAbout.scss';
import { StepItem } from "../../Home/EasySteps/StepItem/StepItem.jsx";

const DreamCarAbout = ({ state }) => {
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
		<div className="dream-car">
			<article className="dream-car__body">
				<h2 className="dream-car__title title">
					{state.title}
				</h2>
				<div className="dream-car__tex-wrap">
					<p className="dream-car__text text">
						{state.text[1]}
					</p>
					<p className="dream-car__text text">
						{state.text[2]}
					</p>
				</div>
			</article>
			<ul className="dream-car__list">
				{listSteps}
			</ul>
		</div>
	)
}

export default DreamCarAbout;