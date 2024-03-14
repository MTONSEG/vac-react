import React from "react";
import { Accordion } from "../UI/Accordion/Accordion.jsx";
import { TitlePages } from "../UI/TitlePages/TitlePages.jsx";
import { Header } from "../UI/Header/Header.jsx";
import './Terms.scss';

export const Privacy = ({ state, ...props }) => {
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
			<TitlePages title={state.bigTitle} />
			<div className="terms">
				<Accordion state={state} />
			</div>
		</>
	)
}