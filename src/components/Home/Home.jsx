import React, {lazy} from "react";
import './Home.scss';
const Header = lazy(() => import('../UI/Header/Header.jsx'))
const HeroHome = lazy(() => import('./HeroHome/HeroHome.jsx'))
const HowItWork = lazy(() => import('./HowItWork/HowItWork.jsx'))
const Advantages = lazy(() => import('./Advantages/Advantages.jsx'))
const ChooseDream = lazy(() => import('./ChooseDream/ChooseDream.jsx'))
const EasySteps = lazy(() => import('./EasySteps/EasySteps.jsx'))
const CommentsSlider = lazy(() => import('./CommentsSlider/CommentsSlider.jsx'))
const HappyCustomers = lazy(() => import('./HappyCustomers/HappyCustomers.jsx'))
const Calculator = lazy(() => import('./Calculator/Calculator.jsx'))
const InterestingRead = lazy(() => import('./InterestingRead/InterestingRead.jsx'))

const Home = ({ state, ...props }) => {

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
			<HeroHome state={state.hero} />
			<HowItWork state={state.itwork} />
			<EasySteps state={state.easySteps} />
			<Advantages state={state.advantages} />
			<ChooseDream state={state.chooseDream} />
			<HappyCustomers state={state.happyCustomers} />
			<CommentsSlider state={state.commentsSlider} />
			<Calculator state={state.calculator} />
			<InterestingRead state={state.interesting} />
		</>
	)
}

export default Home;