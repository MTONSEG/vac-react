import React, { lazy } from "react";

const Calculator = lazy(() => import('../Home/Calculator/Calculator.jsx'))
const Header = lazy(() => import('../UI/Header/Header.jsx'))
import TitlePages from "../UI/TitlePages/TitlePages.jsx";
import './CalcPage.scss';

const CalcPage = ({ state, ...props }) => {

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
			<Calculator
				state={state}
				className="calc-page-margin"
			/>
		</>
	);
}

export default CalcPage;