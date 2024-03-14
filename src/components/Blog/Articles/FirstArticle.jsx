import React from "react";
import { Link } from "react-router-dom";
import { InterestingRead } from "../../Home/InterestingRead/InterestingRead.jsx";
import { Header } from "../../UI/Header/Header.jsx";
import './Articles.scss';

export const FirstArticle = ({ state, ...props  }) => {
	let data = state.first;
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
						<div className="article__text-wrap">
							<p className="article__text article__text_first text">
								{data.text[0]}
							</p>
							<p className="article__text text">
								{data.text[1]}
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