import React from "react"
import { Link } from "react-router-dom"
import '../Buttons.scss'
import icon from '../../../../assets/icons/arrow-back.svg'

export const BackQuizBtn = props => {

	return (
		<Link to={`/quiz/${props.prev}`}
			className={props.className ? `${props.className} back-btn` : 'back-btn'}
			onClick={props.onBackClick}
		>
			<img src={icon} alt="icon" className="back-btn__icon" />
			<span>back</span>
		</Link>
	)

}