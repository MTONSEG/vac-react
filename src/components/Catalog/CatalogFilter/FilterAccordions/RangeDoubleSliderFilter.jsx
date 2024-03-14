import React, { useState, useRef } from "react";
import './FilterAccordions.scss';
import ReactSlider from 'react-slider';

export const RangeDoubleSliderFilter = ({ state, ...props }) => {
	let contentEl = useRef();

	let [selected, isSelected] = useState(false);
	let [mileageValue, setMileageValue] = useState([state.start, state.end])
	
	const onClickHandler = () => { isSelected(!selected) };
	const onChangeValueHandler = (value, index) => { setMileageValue(value) }

	const renderThumbHandler = (obj) => (
		<div {...obj} className="range-slider__btn" aria-label="range-slider"></div>
	)

	const priceHandle = num => {
		let res = String(num).split('').reverse();

		for (let i = 3; i < res.length; i += 4) {
			res.splice(i, 0, ' ');
		}

		return res.reverse().join('');
	}

	let value = (props.type === 'year') ?
		[`${mileageValue[0]}`, `${mileageValue[1]}`] :
		[`$ ${priceHandle(mileageValue[0])}`, `$ ${priceHandle(mileageValue[1])}`];

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
				<div className="filter-accordion__double-range">
					<p className="filter-accordion__double-range-value">
						<span>{value[0]}</span>
						<span>{value[1]}</span>
					</p>

					<ReactSlider
						min={state.min}
						max={state.max}
						defaultValue={[state.start, state.end]}
						className="slider-range__slider range-slider"
						thumbClassName="range-slider__thumb"
						trackClassName="range-slider__track range-slider__track_double"
						onChange={onChangeValueHandler}
						renderThumb={renderThumbHandler}
					/>
				</div>
			</div>
		</div>
	);
}