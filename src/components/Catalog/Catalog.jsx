import React, { useState } from "react";
import './Catalog.scss';
import { CatalogFilter } from "./CatalogFilter/CatalogFilter.jsx";
import { CatalogBody } from "./CatalogBody/CatalogBody.jsx";
import { Header } from "../UI/Header/Header.jsx";

export const Catalog = ({ state, ...props }) => {
	let modalState = props.stateModals;

	let [activeFilter, setActiveFilter] = useState(false);

	const handleActiveFilterClick = () => { setActiveFilter(!activeFilter) }


	return (
		<>
			<Header
				mod='invent'
				logo={modalState.logo}
				showMenu={modalState.showMenu}
				setShowMenu={modalState.setShowMenu}
				showRequest={modalState.showRequest}
				setShowRequest={modalState.setShowRequest}
			/>
			<div
				className="catalog"
			>
				<div className="container">
					<div className="catalog__row">
						<CatalogFilter
							state={state.filter}
							className="catalog__filter"
							activeFilter={activeFilter}
							onClickHandler={handleActiveFilterClick}
						/>
						<CatalogBody
							state={state.body}
							className="catalog__body"
							activeFilter={activeFilter}
							onClickHandler={handleActiveFilterClick}
						/>
					</div>
				</div>
			</div>
		</>
	);
}