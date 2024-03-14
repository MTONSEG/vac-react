import React, { useState } from "react";
import './FilterAccordions.scss';

export const BodyTypeFilter = ({ state, ...props }) => {

	return (
		<div className={`${props.className} filter-catalog`}>
			<h1 className="filter-catalog__title">
				{state.title}
			</h1>
			<div className="filter-catalog__accordion">
				
			</div>
		</div>
	);
}