import React from "react";
import './InterestingRead.scss';
import { LinerBtn } from '../../UI/Buttons/LinerBtn.jsx'
import { SliderInteresting } from "./SliderInteresting/SliderInteresting.jsx";

const InterestingRead = ({ state }) => {

	let displayWidth = window.innerWidth;

	return (
		<div className="interesting-read">
			<div className="container">
				<div className="interesting-read__head">
					<h1 className="interesting-read__title title">
						{state.title}
					</h1>
					{
						displayWidth > 767 ?
							<LinerBtn
								title='all articles'
								className="interesting-read__btn"
							/> : ''
					}

				</div>
				<div className="interesting-read__slider">
					<SliderInteresting
						state={state.list}
						iconBtn={state.iconBtn}
					/>
				</div>
				{
					displayWidth <= 767 ?
						<LinerBtn
							title='all articles'
							className="interesting-read__btn"
						/> : ''
				}
			</div>
		</div>
	)
}

export default InterestingRead;