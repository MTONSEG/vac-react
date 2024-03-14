import React from "react";
import { CardBodyCatalog } from "./CardBodyCatalog/CardBodyCatalog.jsx";
import './CatalogBody.scss';
import Masonry from '@mui/lab/Masonry';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { InputSearch } from "../../UI/Forms/InputForm/InputSearch.jsx";
import { Select } from "../../UI/Forms/Select/Select.jsx";

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 768,
			md: 993,
			lg: 1221,
			xl: 1681,
		},
	},
});

let widthScreen = window.innerWidth;


export const CatalogBody = ({ state, ...props }) => {
	let cardList = state.list.map((el, index) => (
		<CardBodyCatalog
			key={el.id}
			image={el.image}
			price={el.price}
			title={el.title}
			year={el.year}
			bodyType={el.bodyType}
			transmission={el.transmission}
			mileage={el.mileage}
		/>
	))

	const breakpointCols = {
		xs: 1,
		sm: 2,
		md: 2,
		lg: 2,
		xl: 2,
	};

	let widthScreen = window.innerWidth;

	const handleScroll = e => {
		if (props.activeFilter) {
			e.preventDefault();
			console.log(props.activeFilter)
		}

	}
	return (
		<div className={`${props.className} body-catalog`} onScroll={handleScroll}>
			<div className="body-catalog__head">
				<div className="body-catalog__filter-wrap">
					<button
						className="body-catalog__filter-btn"
						onClick={props.onClickHandler}
					>
						<img src={state.iconFilter} alt="filter" className="body-catalog__filter-icon" />
					</button>
					{
						widthScreen > 767
							? <span className="body-catalog__filter-text">
								Search Filter
							</span>
							: ''
					}

				</div>
				<div className="body-catalog__search">
					<InputSearch
						icon={state.search.icon}
						placeholder={state.search.ph}
						name={state.search.title}
					/>
				</div>
				<button className="body-catalog__share-btn">
					<img src={state.iconShare} alt="share" className="body-catalog__share-icon" />
				</button>
				<div className="body-catalog__sort">
					{
						(widthScreen > 1220)
							? <span className="body-catalog__sort-title text">
								{state.sorting.title}
							</span>
							: ''
					}
					<Select
						icon={state.accordionArrow}
						default={state.sorting.def}
						list={state.sorting.list}
					/>
				</div>
			</div>
			<div className="body-catalog__list">
				<ThemeProvider theme={theme}>
					<Masonry
						columns={breakpointCols}
						spacing={2.37}
						className="body-catalog__masonry"
					>
						{cardList}
					</Masonry>
				</ThemeProvider>
			</div>
		</div>
	);
}