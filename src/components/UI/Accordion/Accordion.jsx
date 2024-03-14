import React, { useState } from "react";
import './Accordion.scss';
import { ItemAccordion } from "./ItemAccordion/ItemAccordion.jsx";

export const Accordion = ({ state }) => {
	let [selected, setSelected] = useState(null);

	const onToggle = index => {
		if (selected === index) {
			setSelected(null);
		} else {
			setSelected(index);
		}
	}

	let items = state.list.map((el, index) => (<ItemAccordion
		key={el.id}
		id={el.id}
		icon={state.icon}
		selected={selected}
		title={el.title}
		text={el.text}
		onToggle={onToggle}
	/>
	))
	return (
		<div className="accordion">
			<div className="container">
				<ul className="accordion__list">
					{items}
				</ul>
			</div>
		</div>
	)
}