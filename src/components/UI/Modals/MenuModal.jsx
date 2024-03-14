import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './Modals.scss';

const MenuModal = ({ state, ...props }) => {
	let icons = state.icons;

	const handleOnCloseClick = () => { props.setShowMenu(!props.showMenu) }

	useEffect(() => {
		document.body.style.overflow = props.showMenu ? 'hidden' : 'auto';
	}, [props.showMenu])

	return (
		<div className={
			props.showMenu
				? "modal active"
				: "modal"}
		>

			<div className={
				props.showMenu
					? "modal__body active"
					: "modal__body"
			}>
				<img
					src={icons.close}
					alt="close"
					className={"modal__close-icon"}
					onClick={handleOnCloseClick}
				/>
				<div className="modal__container">
					<ul className="modal__list">
						<li className="modal__item">
							<Link to="/"
								className="modal__link"
								onClick={handleOnCloseClick}
							>
								Contact us
							</Link>
						</li>
						<li className="modal__item">
							<Link to="/about"
								className="modal__link"
								onClick={handleOnCloseClick}
							>
								About VAC
							</Link>
						</li>
						<li className="modal__item">
							<Link to="/rates"
								className="modal__link"
								onClick={handleOnCloseClick}
							>
								Loan Rates
							</Link>
						</li>
						<li className="modal__item">
							<Link to="/videos"
								className="modal__link"
								onClick={handleOnCloseClick}
							>
								Video
							</Link>
						</li>
						<li className="modal__item">
							<Link to="/blog"
								className="modal__link"
								onClick={handleOnCloseClick}
							>
								Blog
							</Link>
						</li>
						<li className="modal__item">
							<Link to="/calc"
								className="modal__link"
								onClick={handleOnCloseClick}
							>
								Calculate
							</Link>
						</li>
					</ul>
					<div className="modal__socials">
						<a className="modal__soc-link" href="#">
							<img src={icons.insta} alt="instagram" className="modal__soc-icon" />
						</a>

						<a className="modal__soc-link" href="#">
							<img src={icons.fb} alt="instagram" className="modal__soc-icon" />
						</a>

						<a className="modal__soc-link" href="#">
							<img src={icons.yt} alt="instagram" className="modal__soc-icon" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MenuModal;