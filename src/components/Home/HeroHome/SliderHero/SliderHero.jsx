import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import './SliderHero.scss';
const Picture = React.lazy(() => import('../../../UI/Picture/Picture.jsx'));

export const SliderHero = props => {
	let slides = props.images.map(elem => (
		<SwiperSlide key={elem.id}>
			<Picture
				img={elem.img}
				webp={elem.webp}
				className="slider-hero__slide-image"
				lazy={false}
			/>
		</SwiperSlide>
	))

	const swiperRef = useRef();

	return (
		<>

			<Swiper
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
			>
				{slides}
			</Swiper>

			<button
				className="slider-hero__btn slider-hero__btn_prev"
				onClick={() => swiperRef.current?.slidePrev()}
			>
				<img className="slider-hero__icon-btn" src={props.iconBtn} alt="prev" />
			</button>
			<button
				className="slider-hero__btn slider-hero__btn_next"
				onClick={() => swiperRef.current?.slideNext()}
			>
				<img className="slider-hero__icon-btn _rotate" src={props.iconBtn} alt="next" />
			</button>
		</>
	)
}