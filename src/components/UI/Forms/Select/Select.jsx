import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import './Select.scss';

export const Select = props => {
	let [isActive, setActive] = useState(false);
	let [currentValue, setCurrentValue] = useState(props.default);

	let currentEl = useRef(null);

	const handleActiveOnClick = (e) => {
		setActive(!isActive);
	}
	const handleOnCurrentClick = (e) => {
		let targetCurrent = e.currentTarget;

		setCurrentValue(targetCurrent.textContent);
		handleActiveOnClick();
	}

	useEffect(() => {
		function handleClickOutside(event) {
			if (currentEl.current && !currentEl.current.contains(event.target)) {
				setActive(false);
			}
		}

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [currentEl]);

	let selectItems = props.list.map((el, i) => (
		<li
			className="select__item"
			key={i}
			onClick={handleOnCurrentClick}

		>
			{el.title}
		</li>
	))

	return (
		<div
			ref={currentEl}
			className={
				isActive ?
				"select active" : "select"
			}>
			<div
				className="select__header"
				onClick={handleActiveOnClick}
			>
				<p
					className="select__title"
				>
					<img src={props.icon} alt="icon" className="select__icon" />
					{currentValue}

				</p>
			</div>
			<ul
				className="select__body">
				{selectItems}
			</ul>
		</div>)
}