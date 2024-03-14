import React, { useRef } from "react";

export const ItemAccordion = props => {

	let contentEl = useRef(null);

	const onClickHandler = () => { props.onToggle(props.id) }

	return (
		<li className="item-accordion">
			<h1 className={
					props.selected == props.id ?
						"item-accordion__title active" : "item-accordion__title"
				}
				onClick={onClickHandler}
			>
				{props.title}
				<img src={props.icon} alt="arrow" />
			</h1>
			<p ref={contentEl}
				className={
					props.selected == props.id ?
						"item-accordion__text text active" :
						"item-accordion__text text"
				}
				style={
					props.selected == props.id
					? { height: contentEl.current.scrollHeight }
					: { height: "0px" }
				}
			>
				{props.text}
			</p>
		</li>
	)
}