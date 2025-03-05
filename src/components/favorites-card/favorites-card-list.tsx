import { FC } from "react";
import { FullOffer, OffersList } from "../../types/offer";
import FavoritesCard from "./favorites-card";

interface FavoritesCardListProps {
	offers: OffersList[];
}

const FavoritesCardList: FC<FavoritesCardListProps> = ({ offers }) => {
    const uniqueLocations = new Set(offers.filter(offer => offer.isFavorite).map(offer => offer.city.name));
    
	return 	(
        <ul className="favorites__list">
            {
                Array.from(uniqueLocations).map(location => (
                    <li className="favorites__locations-items">
                        <div className="favorites__locations locations locations--current">
                            <div className="locations__item">
                                <a className="locations__item-link" href="#">
                                    <span>{location}</span>
                                </a>
                            </div>
                        </div>
                        <div className="favorites__places">
                            {offers.filter(offer => offer.isFavorite && offer.city.name == location).map(offer => <FavoritesCard offer={offer}/>)}
                        </div>
                    </li>
                ))
            }
           
        </ul>
    );
}

export default FavoritesCardList;