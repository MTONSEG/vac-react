import React from "react";
import { Link } from "react-router-dom";
import { Picture } from "../../../UI/Picture/Picture.jsx";
import './CardBodyCatalog.scss';

export const CardBodyCatalog = props => {
	let price = String(props.price).split('');
	price.splice(-3, 0, ' ');
	price = price.join('');

	return (
		<Link to='/item' className="item-catalog">
			<div className="item-catalog__image-wrap">
				<Picture
					className="item-catalog__image"
					img={props.image.img}
					webp={props.image.webp}
					alt={props.title}
				/>
			</div>
			<div className="item-catalog__body">
				<h2 className="item-catalog__title">
					{props.title}
				</h2>
				<p className="item-catalog__price">
					{`$ ${price}`}
				</p>
				<ul className="item-catalog__list-info">
					<li className="item-catalog__item-info text">
						{props.year} <span>year</span>
					</li>

					<li className="item-catalog__item-info text">
						{props.bodyType}
					</li>

					<li className="item-catalog__item-info text">
						{props.transmission}
					</li>
				</ul>
				<p className="item-catalog__mileage text">
					{props.mileage}
				</p>
			</div>
		</Link>
	);
}