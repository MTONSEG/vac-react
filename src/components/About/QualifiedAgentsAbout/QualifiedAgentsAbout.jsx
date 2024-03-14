import React from "react";
import { SolidBtn } from "../../UI/Buttons/SolidBtn.jsx";
import './QualifiedAgentsAbout.scss';

const QualifiedAgentsAbout = ({ state }) => {
	return (
		<div className="qualified-agents">
			<div className="qualified-agents__card">
				<h1 className="qualified-agents__subtitle">
					{state.subtitle}
				</h1>

				<SolidBtn
					title={state.titleBtn}
					className="qualified-agents__btn btn_solid"
				/>
			</div>
			<article className="qualified-agents__article">
				<h1 className="qualified-agents__title title">
					{state.title}
				</h1>
				<div className="qualified-agents__text-wrap">
					<p className="qualified-agents__text text">
						{state.text[1]}
					</p>
					<p className="qualified-agents__text text">
						{state.text[2]}
					</p>
				</div>

			</article>
		</div>
	)
}

export default QualifiedAgentsAbout;