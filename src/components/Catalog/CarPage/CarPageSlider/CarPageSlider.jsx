import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import iconShare from '../../../../assets/icons/share-white.svg';

import './CarPageSlider.scss';
import { Picture } from "../../../UI/Picture/Picture.jsx";
import { SliderNavBtn } from "../../../UI/Buttons/SliderNavBtn/SliderNavBtn.jsx";

export const CarPageSlider = ({ state, ...props }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const swiperRef = useRef(null);

	const handlePrevClickBtn = () => swiperRef.current?.slidePrev();
	const handleNextClickBtn = () => swiperRef.current?.slideNext();

	let imageList = state.map((el, i) => (
		<SwiperSlide key={i}>
			<Picture className="card-slider__image"
				img={el.img}
				webp={el.webp}
				imgMob={el.imgMob}
				webpMob={el.webpMob}
				widthMob='545'
			/>
		</SwiperSlide>
	))

	return (
		<>
			<Swiper
				spaceBetween={10}
				centeredSlides={true}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[Navigation, Thumbs]}
				zoom={true}
				className="card-slider__big"
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
			>
				{imageList}
				<div className="card-slider__buttons">
					<button className="card-slider__btn">Exterior</button>
					<button className="card-slider__btn">Interior</button>
					<button className="card-slider__share">
						<img src={iconShare} alt="share" className="card-slider__share-icon" />
					</button>
				</div>
			</Swiper>

			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={1}
				slidesPerView={4}
				modules={[Navigation, Thumbs]}
				className="card-slider__small"
				breakpoints={{
					768: {
						spaceBetween: 10
					}
				}}
			>
				{imageList}

				<SliderNavBtn
					className='card-slider__nav-btn prev'
					onClick={handlePrevClickBtn}
				/>
				<SliderNavBtn
					className='card-slider__nav-btn next'
					onClick={handleNextClickBtn}
				/>
			</Swiper>
		</>
	);
}