import React, {lazy} from "react";
import './About.scss';
import TitlePages from "../UI/TitlePages/TitlePages.jsx";
const Header = lazy(() => import('../UI/Header/Header.jsx'))
const MissionAbout = lazy(() => import('./MissionAbout/MissionAbout.jsx'))
const DreamCarAbout = lazy(() => import('./DreamCarAbout/DreamCarAbout.jsx'))
const TransparencyAbout = lazy(() => import('./TransparencyAbout/TransparencyAbout.jsx'))
const BestPricesAbout = lazy(() => import('./BestPricesAbout/BestPricesAbout.jsx'))
const QualifiedAgentsAbout = lazy(() => import('./QualifiedAgentsAbout/QualifiedAgentsAbout.jsx'))
const CommentsSlider = lazy(() => import('../Home/CommentsSlider/CommentsSlider.jsx'))
const DynamicTeamAbout = lazy(() => import('./DynamicTeamAbout/DynamicTeamAbout.jsx'))
const FeaturesAbout = lazy(() => import('./FeaturesAbout/FeaturesAbout.jsx'))
const Calculator = lazy(() => import('../Home/Calculator/Calculator.jsx'))

const About = ({ state, ...props }) => {

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
			<div className="about">
				<div className="container">
					<div className="about__mission">
						<MissionAbout state={state.mission} />
					</div>
					<div className="about__dream-car">
						<DreamCarAbout
							state={state.dreamCar}
						/>
					</div>
					<div className="about__transparency">
						<TransparencyAbout state={state.transparency} />
					</div>
					<div className="about__best-prices">
						<BestPricesAbout state={state.bestPrices} />
					</div>
					<div className="about__qualified-agents">
						<QualifiedAgentsAbout state={state.qualifiedAgents} />
					</div>
					<div className="about__comments">
						<CommentsSlider state={state.commentsSlider} />
					</div>
					<div className="about__dynamic-team">
						<DynamicTeamAbout state={state.dynamicTeam} />
					</div>
					<div className="about__features">
						<FeaturesAbout state={state.features} />
					</div>
					<div className="about__calculator">
						<Calculator state={state.calculator} />
					</div>
				</div>
			</div>
		</>
	)
}

export default About;