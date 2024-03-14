import React, { useState } from "react";
import { useEffect } from "react";
import './CatalogFilter.scss';
import { BodyTypeFilter } from "./FilterAccordions/BodyTypeFilter.jsx";
import { MakeModelFilter } from "./FilterAccordions/MakeModelFilter.jsx";
import { MileageFilter } from "./FilterAccordions/MileageFilter.jsx";
import { RangeDoubleSliderFilter } from "./FilterAccordions/RangeDoubleSliderFilter.jsx";
import { TransmissionFilter } from "./FilterAccordions/TransmissionFilter.jsx";

export const CatalogFilter = ({ state, ...props }) => {

	useEffect(() => {
		document.body.style.overflow = props.activeFilter ? 'hidden' : 'auto';
	}, [props.activeFilter])

	return (
		<div className={props.activeFilter
			? `${props.className} filter-catalog active`
			: `${props.className} filter-catalog`
		}
		>
			<div className="filter-catalog__accordion">

				<img
					src={state.iconClose}
					alt="close"
					className="filter-catalog__close"
					onClick={props.onClickHandler}
				/>

				<h1 className="filter-catalog__title">
					{state.title}
				</h1>

				<MakeModelFilter
					icon={state.iconArr}
					search={state.iconSearch}
					state={state.makeModel}
				/>
				<BodyTypeFilter
					icon={state.iconArr}
					state={state.bodyType}
				/>
				<TransmissionFilter
					icon={state.iconArr}
					state={state.transmission}
				/>

				<RangeDoubleSliderFilter
					icon={state.iconArr}
					state={state.price}
				/>
				<RangeDoubleSliderFilter
					icon={state.iconArr}
					type='year'
					state={state.year}
				/>
				<MileageFilter
					icon={state.iconArr}
					state={state.mileage}
				/>
			</div>
		</div>
	);
}