import React, { useState, useRef } from "react";
import { Checkbox } from "../../../UI/Forms/Checkbox/Checkbox.jsx";
import './FilterAccordions.scss';

export const BodyTypeFilter = ({ state, ...props }) => {
	let contentEl = useRef(null);

	let [selected, isSelected] = useState(false);

	const onClickHandler = () => { isSelected(!selected) };
	
	return (
		<div className="item-accordion filter-accordion">
			<h1 className={
				selected
					? "item-accordion__title active"
					: "item-accordion__title"
			}
				onClick={onClickHandler}
			>
				{state.title}
				<img src={props.icon} alt="arrow" />
			</h1>
			<div ref={contentEl}
				className={
					selected
						? "item-accordion__text text active"
						: "item-accordion__text text"
				}
				style={
					selected
						? { height: contentEl.current.scrollHeight }
						: { height: "0px" }
				}
			>
				<div className="filter-accordion__checkbox">
					{state.list.map((el, i) => (
						<Checkbox key={i}
							icon={el.icon}
							text={el.title}
						/>
					))}
				</div>
			</div>
		</div>
	);
}