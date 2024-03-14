import React from "react";
import './ChooseDream.scss';
const Picture = React.lazy(() => import('../../UI/Picture/Picture.jsx'));
import { SolidBtn } from "../../UI/Buttons/SolidBtn.jsx";


const ChooseDream = ({ state }) => {
	return (
		<div className="choose-dream">
			<div className="container">
				<div className="choose-dream__row">
					<div className="choose-dream__image-wrap">
						<Picture
							img={state.image.img}
							webp={state.image.webp}
							imgMob={state.image.imgM}
							webpMob={state.image.webpM}
							imgTab={state.image.imgT}
							webpTab={state.image.webpT}
							widthMob="992"
							widthTab="767"
							className="choose-dream__image" />
					</div>
					<article className="choose-dream__body">
						<h1 className="choose-dream__title title">
							{state.title}
						</h1>
						<div className="choose-dream__text-wrap">
							<p className="choose-dream__text text">
								{state.text}
							</p>
							<SolidBtn
								className="choose-dream__btn btn_solid"
								title="inventory"
							/>
						</div>
					</article>
				</div>
			</div>
		</div>
	)
}

export default ChooseDream;