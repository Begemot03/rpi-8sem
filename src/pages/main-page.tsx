import { FC, useState } from "react";
import CitiesCardList from "../components/cities-card/cities-card-list";
import Logo from "../components/logo";
import { FullOffer } from "../types/offer";
import CitiesMap from "../components/cities-map/cities-map";
import mockOffers from "../mocks/offer";
import CitiesList from "../components/cities-list/cities-list";
import { useAppSelector } from "../hooks";
import SortVariants from "../components/sort/sort-variants";
import { SortOffersType } from "../const";
import { SortOffer } from "../types/sort";
import { sortOffersByType } from "../utils/sort";

type MainPageProps = {
};

const MainPage: FC<MainPageProps> = () => {
	const selectedCity = useAppSelector((state) => state.city);
	const offersList = useAppSelector((state) => state.offers);
	const rentalOffersCount = offersList.length;

	const [selectedOffer, setSelectedOffer] = useState<FullOffer | undefined>(
		undefined
	);

	const handleListitemHover = (offerId: string) => {
		const currentOffer = offersList.find((offer) => offer.id == offerId);

		setSelectedOffer(currentOffer);
	};

	const [activeSort, setActiveSort] = useState<SortOffer>(
		Object.keys(SortOffersType)[0] as SortOffer
	);

	return (
		<div className="page page--gray page--main">
			<header className="header">
				<div className="container">
					<div className="header__wrapper">
						<div className="header__left">
							<Logo />
						</div>
						<nav className="header__nav">
							<ul className="header__nav-list">
								<li className="header__nav-item user">
									<a
										className="header__nav-link header__nav-link--profile"
										href="#"
									>
										<div className="header__avatar-wrapper user__avatar-wrapper"></div>
										<span className="header__user-name user__name">
											Myemail@gmail.com
										</span>
										<span className="header__favorite-count">3</span>
									</a>
								</li>
								<li className="header__nav-item">
									<a className="header__nav-link" href="#">
										<span className="header__signout">Sign out</span>
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>

			<main className="page__main page__main--index">
				<h1 className="visually-hidden">Cities</h1>
				<div className="tabs">
					<section className="locations container">
						<CitiesList selectedCity={selectedCity} />
					</section>
				</div>
				<div className="cities">
					<div className="cities__places-container container">
						<section className="cities__places places">
							<h2 className="visually-hidden">Places</h2>
							<b className="places__found">
								{rentalOffersCount} предложений в {selectedCity?.name}
							</b>
							<SortVariants
								onChange={setActiveSort}
								activeSorting={activeSort}
							/>
							<CitiesCardList
								offers={sortOffersByType(offersList, activeSort)}
							/>
						</section>
						<div className="cities__right-section">
							<CitiesMap offers={offersList} />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default MainPage;
