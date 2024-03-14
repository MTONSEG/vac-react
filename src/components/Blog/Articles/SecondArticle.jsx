import React from "react";
import { InterestingRead } from "../../Home/InterestingRead/InterestingRead.jsx";
import { Link } from "react-router-dom";
import { Picture } from "../../UI/Picture/Picture.jsx";
import { Header } from "../../UI/Header/Header.jsx";
import './Articles.scss';

export const SecondArticle = ({ state, ...props }) => {
	let data = state.second;
	let modalState = props.stateModals;

	return (
		<>
			<Header
				logo={modalState.logo}
				showMenu={modalState.showMenu}
				setShowMenu={modalState.setShowMenu}
				showRequest={modalState.showRequest}
				setShowRequest={modalState.setShowRequest}
			/>
			<div className="article">
				<div className="article__header"></div>
				<div className="container">
					<article className="article__body">
						<Link to='/blog' className="article__link">
							<img src={state.icon} alt="back" />
							<span>back</span>
						</Link>
						<p className="article__date text">
							{data.date}
						</p>
						<h1 className="article__title title">
							{data.title}
						</h1>
						<div className="article__text-wrapper">
							<h2 className="article__subtitle">
								{data.subtitle}
							</h2>
							<p className="article__text text">
								{data.text[0]}
							</p>
							<div className="article__image-block">
								<Picture
									className="article__image"
									img={data.images[0].img}
									webp={data.images[0].webp}
								/>
								<Picture
									className="article__image"
									img={data.images[1].img}
									webp={data.images[1].webp}
								/>
							</div>
						</div>
						<div className="article__text-wrapper">
							<h2 className="article__subtitle">
								{data.subtitle}
							</h2>
							<p className="article__text text">
								{data.text[1]}
							</p>
							<div className="article__image-block">
								<Picture
									className="article__image"
									img={data.images[2].img}
									webp={data.images[2].webp}
								/>
							</div>
							<p className="article__text text">
								{data.text[2]}
							</p>
						</div>
						<div className="article__text-wrapper">
							<h2 className="article__subtitle">
								{data.subtitle}
							</h2>
							<p className="article__text text">
								{data.text[3]}
							</p>
							<h3 className="article__subtitle article__subtitle_small">
								{data.subtitle}
							</h3>
							<p className="article__text text">
								{data.text[4]}
							</p>
							<h3 className="article__subtitle article__subtitle_small">
								{data.subtitle}
							</h3>
							<p className="article__text text">
								{data.text[5]}
							</p>
							<div className="article__image-block">
								<Picture
									className="article__image"
									img={data.images[3].img}
									webp={data.images[3].webp}
								/>
							</div>
							<p className="article__text text">
								{data.text[6]}
							</p>
							<p className="article__text text">
								{data.text[7]}
							</p>
						</div>
					</article>
					<div className="article__slider">
						<InterestingRead
							state={state.interesting}
						/>
					</div>
				</div>
			</div>
		</>
	)
}