import React, { useRef } from "react";
import './SliderInteresting.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { ItemSliderInteresting } from "./ItemSliderInteresting/ItemSliderInteresting.jsx";

export const SliderInteresting = ({ state, ...props }) => {
	const swiperRef = useRef();

	const onPrevClickHandler = () => swiperRef.current?.slidePrev();
	const onNextClickHandler = () => swiperRef.current?.slideNext();

	let listSlides = state.map(el => (
		<SwiperSlide key={el.id}>
			<ItemSliderInteresting
				img={el.image.img}
				webp={el.image.webp}
				date={el.date}
				title={el.text}
			/>
		</SwiperSlide>
	))

	return (
		<>
			<Swiper
				spaceBetween={20}
				slidesPerView={1}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
				breakpoints={{
					767: {
						slidesPerView: 2,
					},
					991: {
						slidesPerView: 3
					}
				}}
			>
				{listSlides}
			</Swiper>

			<button
				className="interesting-read__slider-btn interesting-read__slider-btn_prev"
				onClick={onPrevClickHandler}
			>
				<img className="interesting-read__slider-icon-btn" src={props.iconBtn} alt="prev" />
			</button>
			<button
				className="interesting-read__slider-btn interesting-read__slider-btn_next"
				onClick={onNextClickHandler}
			>
				<img className="interesting-read__slider-icon-btn" src={props.iconBtn} alt="next" />
			</button>
		</>
	)
}