import React from "react";
import './LoanRates.scss';
import TitlePages from "../UI/TitlePages/TitlePages.jsx";
import MissionAbout from "../About/MissionAbout/MissionAbout.jsx";
import { TermsLoanRates } from "./TermsLoanRates/TermsLoanRates.jsx";
import { BenefitsLoanRates } from "./BenefitsLoanRates/BenefitsLoanRates.jsx";
import Calculator from "../Home/Calculator/Calculator.jsx";

const Header = React.lazy(() => import('../UI/Header/Header.jsx'))

const LoanRates = ({ state, ...props }) => {
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
			<div className="loan-rates">
				<div className="container">
					<div className="loan-rates__credit">
						<MissionAbout state={state.credit} />
					</div>
					<div className="loan-rates__terms">
						<TermsLoanRates state={state.termsRates} />
					</div>
					<div className="loan-rates__benefits">
						<BenefitsLoanRates state={state.benefits} />
					</div>
					<div className="loan-rates__calc">
						<Calculator state={state.calculator} />
					</div>
				</div>
			</div>
		</>
	)
}

export default LoanRates;