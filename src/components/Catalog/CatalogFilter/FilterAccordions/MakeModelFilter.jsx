import React, { useState, useRef } from "react";
import { InputSearch } from "../../../UI/Forms/InputForm/InputSearch.jsx";
import './FilterAccordions.scss';

export const MakeModelFilter = ({ state, ...props }) => {
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
				<ul className="filter-accordion__model">
					{state.list.map(el => (
						<li key={el.id} className="filter-accordion__model-item">
							<p className="filter-accordion__model-title">
								{el.title}
							</p>
							<InputSearch
								icon={props.search}
								placeholder={el.ph}
								name={el.title}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}