import React from "react"
import './SliderNavBtn.scss';
import iconArrow from '../../../../assets/icons/slider_arr-left_white.svg';

export const SliderNavBtn = props => {


	return (
		<div
			className={
				props.className ?
					`${props.className} nav-btn` : `nav-btn `
			}
			onClick={props.onClick}
		>
			<img src={iconArrow} alt="arrow" className="nav-btn__icon" />
		</div>
	)
}