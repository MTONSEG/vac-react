import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './Quiz.scss';
import { quizData } from "../../state";
const Header = React.lazy(() => import('../UI/Header/Header.jsx'))
import { ProgressQuiz } from "./ProgressQuiz/ProgressQuiz";
import { BodyQuiz } from "./BodyQuiz/BodyQuiz";
import { ContainerQuiz } from "./ContainerQuiz/ContainerQuiz";
import { AnswersQuiz } from "./BodyQuiz/AnswersQuiz/AnswersQuiz";
import { LiveFormQuiz } from "./BodyQuiz/AnswersWithFormQuiz/LiveFormQuiz";
import { TellEmploymentQuiz } from "./BodyQuiz/AnswersWithFormQuiz/TellEmploymentQuiz";
import { BornFormQuiz } from "./BodyQuiz/AnswersWithFormQuiz/BornFormQuiz";
import { LastStepQuiz } from "./BodyQuiz/AnswersWithFormQuiz/LastStepQuiz";
import { FinishStepQuiz } from "./BodyQuiz/AnswersWithFormQuiz/FinishStepQuiz";
import { ReceivingStepQuiz } from "./BodyQuiz/AnswersWithFormQuiz/ReceivingStepQuiz";
import { IncomeStepQuiz } from "./BodyQuiz/AnswersWithFormQuiz/IncomeStepQuiz";

const Quiz = props => {
	let modalState = props.stateModals;

	let [state, setState] = useState(quizData);
	let [progressBar, setProgressBar] = useState(10);
	let [result, setResult] = useState({})

	const getNextEmpStep = (emp) => {
		switch (emp) {
			case 'Other':
				return 'otherIncome';
			case 'Student':
				return 'currentlyWorking'
			default:
				return 'income'
		}
	}
	const getNextReceivingStep = (emp) => {
		switch (emp) {
			case 'Student':
				return 'selfIncome';
			case 'Employed':
				return 'selfIncome'
			case 'Self-Employed':
				return 'selfIncome'
			default:
				return 'address'
		}
	}
	const getPrevAddressStep = (emp) => {
		switch (emp) {
			case 'Student':
				return 'selfIncome';
			case 'Employed':
				return 'selfIncome'
			case 'Self-Employed':
				return 'selfIncome'
			default:
				return 'longReceiving'
		}
	}
	const checkProgress = (step) => {

		switch (step) {
			case 'budget':
				setProgressBar(10);
				break;
			case 'employment':
				setProgressBar(20);
				break;
			case 'otherIncome':
				setProgressBar(25);
				break;
			case 'income':
				setProgressBar(35);
				break;
			case 'currentlyWorking':
				setProgressBar(45);
				break;
			case 'longReceiving':
				setProgressBar(55);
				break;
			case 'selfIncome':
				setProgressBar(65);
				break;
			case 'address':
				setProgressBar(75);
				break;
			case 'born':
				setProgressBar(85);
				break;
			case 'personal':
				setProgressBar(95);
				break;
			default:
				setProgressBar(10);
		}
	}

	useEffect(() => {
		console.log(result)
	}, [result])


	const onContinueClickHandler = (name) => {
		checkProgress(name)
	}



	const onBackClickHandler = (prev, current) => {
		let res = prev === 'budget' ? 'start' : prev;

		checkProgress(res);

		let newResult = Object.assign({}, result);

		delete newResult[current];

		setResult({ ...newResult });
	}


	return (
		<>
			<Header
				mod='request'
				logo={modalState.logo}
				showMenu={modalState.showMenu}
				setShowMenu={modalState.setShowMenu}
				showRequest={modalState.showRequest}
				setShowRequest={modalState.setShowRequest}
			/>
			<ContainerQuiz>
				<ProgressQuiz
					width={progressBar}
					className={result.personal ? 'completed' : ''}
				/>

				<Routes>
					<Route path='/budget' element={
						<BodyQuiz
							state={state.budget}
						>
							<AnswersQuiz
								state={state.budget}
								next='employment'
								result={result}
								checkProgress={checkProgress}
								setResult={setResult}
								onContinueClick={onContinueClickHandler}
								onBackClick={onBackClickHandler}
							/>
						</BodyQuiz>
					} />
					<Route path='/employment' element={
						<BodyQuiz
							state={state.employment}
						>
							<AnswersQuiz
								state={state.employment}
								next={getNextEmpStep(result.employment)}
								prev='budget'
								setResult={setResult}
								result={result}
								checkProgress={checkProgress}
								onContinueClick={onContinueClickHandler}
								onBackClick={onBackClickHandler}
							/>
						</BodyQuiz>
					} />
					<Route path='/otherIncome' element={
						<BodyQuiz
							state={state.otherIncome}
						>
							<AnswersQuiz
								state={state.otherIncome}
								next='income'
								prev='employment'
								result={result}
								setResult={setResult}
								checkProgress={checkProgress}
								onContinueClick={onContinueClickHandler}
								onBackClick={onBackClickHandler}
							/>
						</BodyQuiz>
					} />
					<Route path='/currentlyWorking' element={
						<BodyQuiz
							state={state.currentlyWorking}
						>
							<AnswersQuiz
								state={state.currentlyWorking}
								next='longReceiving'
								prev='employment'
								result={result}
								setResult={setResult}
								checkProgress={checkProgress}
								onContinueClick={onContinueClickHandler}
								onBackClick={onBackClickHandler}
							/>
						</BodyQuiz>
					} />
					<Route path='/income' element={
						<BodyQuiz
							state={state.income}
						>
							<IncomeStepQuiz
								state={state.income}
								result={result}
								setResult={setResult}
								next='longReceiving'
								checkProgress={checkProgress}
								prev={result.employment === 'Other' ? 'otherIncome' : 'employment'}
								onContinueClick={onContinueClickHandler}
								onBackClick={onBackClickHandler}
							/>
						</BodyQuiz>
					} />
					<Route path='/longReceiving' element={
						<BodyQuiz
							state={state.longReceiving}
						>
							<ReceivingStepQuiz
								state={state.longReceiving}
								result={result}
								setResult={setResult}
								next={getNextReceivingStep(result.employment)}
								checkProgress={checkProgress}
								prev={result.employment === 'Student' ? 'currentlyWorking' : 'income'}
								onContinueClick={onContinueClickHandler}
								onBackClick={onBackClickHandler}
							/>
						</BodyQuiz>
					} />

					<Route path='/selfIncome' element={
						<BodyQuiz
							state={state.selfIncome}
						>
							<TellEmploymentQuiz
								state={state.selfIncome}
								result={result}
								setResult={setResult}
								next='address'
								checkProgress={checkProgress}
								prev='longReceiving'
								onContinueClick={onContinueClickHandler}
								onBackClick={onBackClickHandler}
							/>
						</BodyQuiz>
					} />
					<Route path='/address' element={
						<BodyQuiz
							state={state.address}
						>
							<LiveFormQuiz
								state={state.address}
								result={result}
								setResult={setResult}
								next='born'
								checkProgress={checkProgress}
								prev={getPrevAddressStep(result.employment)}
								onContinueClick={onContinueClickHandler}
								onBackClick={onBackClickHandler}
							/>
						</BodyQuiz>
					} />
					<Route path='/born' element={
						<BodyQuiz
							state={state.born}
						>
							<BornFormQuiz
								state={state.born}
								result={result}
								setResult={setResult}
								next='personal'
								prev={'address'}
								checkProgress={checkProgress}
								onContinueClick={onContinueClickHandler}
								onBackClick={onBackClickHandler}
							/>
						</BodyQuiz>
					} />
					<Route path='/personal' element={
						<BodyQuiz
							state={state.personal}
						>
							<LastStepQuiz
								state={state.personal}
								result={result}
								setResult={setResult}
								next='finish'
								prev={'born'}
								checkProgress={checkProgress}
								onContinueClick={onContinueClickHandler}
								onBackClick={onBackClickHandler}
							/>
						</BodyQuiz>
					} />
					<Route path='/finish' element={
						<BodyQuiz
							state={state.finish}
							finish={true}
						>
							<FinishStepQuiz
								state={state.finish}
							/>
						</BodyQuiz>
					} />
				</Routes>



			</ContainerQuiz>
		</>

	)

}

export default Quiz;