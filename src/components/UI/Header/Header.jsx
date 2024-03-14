import React from "react";
import { Link } from "react-router-dom";
import { MenuBtn } from "../Buttons/MenuBtn.jsx";
import { SolidBtn } from "../Buttons/SolidBtn.jsx";
import './Header.scss';

const Header = props => {

	const handleOnToggleCLock = () => { props.setShowRequest(!props.showRequest) }

	return (
		<header className="header">
			<div className="container">
				<div className="header__row">
					<img className="header__logo" src={props.logo} alt="logo" />
					{

						props.mod === 'invent'
							? <p className="header__invent">Inventory</p>
							: ''
					}

					<div className="header__right">
						<div className="header__buttons">
							{
								(props.mod === 'invent')
									? ''
									: <Link to='/catalog' className="header__inventory-btn btn btn_liner">
										Inventory
									</Link>
							}
							{
								(props.mod === 'request')
									? ''
									: <Link to='/quiz/budget'>
										<SolidBtn
											title={
												props.mod === 'apply'
													? 'apply for this vehicle' : "Request a car"
											}
											className={
												props.mod === 'apply'
													? "btn_solid header__request-btn apply"
													: "btn_solid header__request-btn"
											}
											// onClickHandler={handleOnToggleCLock}
										/>
									</Link>
							}

						</div>

						<MenuBtn
							showMenu={props.showMenu}
							setShowMenu={props.setShowMenu} />
					</div>
				</div>
			</div>
		</header>
	)
};

export default Header;