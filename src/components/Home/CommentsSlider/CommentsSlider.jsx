import React, { useRef } from "react";
import './CommentsSlider.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { CommentSlide } from "./CommentSlide/CommentSlide.jsx";



const CommentsSlider = ({ state }) => {
	const swiperRef = useRef();

	let slides = state.slides.map(el => (
		<SwiperSlide key={el.id}>
			<CommentSlide
				img={el.image.img}
				webp={el.image.webp}
				name={el.name}
				comment={el.comment}
			/>
		</SwiperSlide>
	))

	const onPrevClickHandler = () => swiperRef.current?.slidePrev();

	const onNextClickHandler = () => swiperRef.current?.slideNext();

	return (
		<div className="comments-slider">
			<div className="container">
				<h1 className="comments-slider__title title">
					{state.title}
				</h1>
				<div className="comments-slider__body">
					<Swiper
						onBeforeInit={(swiper) => {
							swiperRef.current = swiper;
						}}
						spaceBetween={10}
					>
						{slides}
					</Swiper>

					<button
						className="comments-slider__btn comments-slider__btn_prev"
						onClick={onPrevClickHandler}
					>
						<img className="comments-slider__icon-btn" src={state.iconBtn} alt="prev" />
					</button>
					<button
						className="comments-slider__btn comments-slider__btn_next"
						onClick={onNextClickHandler}
					>
						<img className="comments-slider__icon-btn" src={state.iconBtn} alt="next" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default CommentsSlider;