import React, { useEffect } from "react";
import { SolidBtn } from "../Buttons/SolidBtn.jsx";
import { InputForm } from "../Forms/InputForm/InputForm.jsx";
import './Modals.scss';

const ContactModal = ({ state, ...props }) => {
	let icons = state.icons;

	const handleOnCloseClick = () => { props.setShowMenu(!props.showMenu) }

	useEffect(() => {
		document.body.style.overflow = props.showMenu ? 'hidden' : 'auto';
	}, [props.showMenu])

	return (
		<div className={
			props.showMenu
				? "modal active"
				: "modal"}>

			<div className={
				props.showMenu
					? "modal__body active"
					: "modal__body"
			}>
				<img
					src={icons.close}
					alt="close"
					className={"modal__close-icon _form"}
					onClick={handleOnCloseClick}
				/>
				<div className="modal__container">
					<form className="modal__form form-modal">
						<h1 className="form-modal__title">
							{state.contacts.title}
						</h1>

						<div className="form-modal__inputs">
							<InputForm
								name="Name"
								className="from-modal__input"
								icon={icons.user}
								placeholder="Your Name"
							/>
							<InputForm
								name="Name"
								className="from-modal__input"
								icon={icons.phone}
								placeholder="Phone Number"
								type="number"
							/>
							<InputForm
								name="Name"
								className="from-modal__input"
								icon={icons.mail}
								placeholder="Email Address"
								type="mail"
							/>
						</div>

						<SolidBtn
							title={state.contacts.titleBtn}
							className="from-modal__btn btn_solid"
						/>
					</form>

					<h2 className="form-modal__subtitle">
						{state.contacts.subtitle}
					</h2>

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
						<a className="modal__soc-link" href="#">
							<img src={icons.mailSoc} alt="instagram" className="modal__soc-icon" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactModal;