import { FC } from "react";
import { CityOffer } from "../../types/offer";
import { CITIES_LOCATION } from "../../const";
import { useAppDispatch } from "../../hooks";
import { changeCity } from "../../store/action";

interface ICitiesListProps {
	selectedCity: CityOffer | undefined;
}

const CitiesList: FC<ICitiesListProps> = ({ selectedCity }) => {
	const dispatch = useAppDispatch();

	return (
		<ul className="locations__list tabs__list">
			{CITIES_LOCATION.map((loc) => (
				<li
					key={loc.name}
					className="locations__item"
					onClick={() => dispatch(changeCity(loc))}
				>
					<a
						className={`${
							loc.name == selectedCity?.name
								? "tabs__item--active"
								: "tabs__item"
						} locations__item-link`}
						href="#"
					>
						<span>{loc.name}</span>
					</a>
				</li>
			))}
		</ul>
	);
};

export default CitiesList;
