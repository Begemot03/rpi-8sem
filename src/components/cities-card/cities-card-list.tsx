import { FC } from "react";
import { FullOffer, OffersList } from "../../types/offer";
import CitiesCard from "./cities-card";

interface CitiesCardListProps {
	offers: OffersList[];
}

const CitiesCardList: FC<CitiesCardListProps> = ({ offers }) => {
	return 	(
        <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
                <CitiesCard key={offer.id} offer={offer} />
            ))}
        </div>
    );
}

export default CitiesCardList;