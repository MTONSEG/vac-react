import React from "react";
import { Link } from "react-router-dom";
import './Footer.scss';

const Footer = ({ images }) => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__row">
					<img loading="lazy" src={images.logo} alt="" className="footer__logo" />
					<div className="footer__list-links">
						<Link
							className="footer__link"
							to='/terms'
						>
							Terms
						</Link>
						<Link
							className="footer__link"
							to='/privacy'
						>
							Privacy
						</Link>
					</div>
					<div className="footer__soc">
						<a className="footer__soc-link" href="#" aria-label="Link to Instagram VAC">
							<img loading="lazy" src={images.instagram} alt="" className="footer__soc-icon" />
						</a>

						<a className="footer__soc-link" href="#" aria-label="Link to Facebook VAC">
							<img loading="lazy" src={images.facebook} alt="" className="footer__soc-icon" />
						</a>

						<a className="footer__soc-link" href="#" aria-label="Link to Youtube VAC">
							<img loading="lazy" src={images.youtube} alt="" className="footer__soc-icon" />
						</a>
					</div>
					<div className="footer__created">
						<p className="footer__created-text">
							Created by
						</p>
						<img loading="lazy" src={images.icon} alt="" className="footer__created-icon" />
					</div>
					<p className="footer__copy">
						©Copyright, 2020. Vehicle Approval
					</p>
				</div>
			</div>
		</footer>
	)
};


export default Footer;