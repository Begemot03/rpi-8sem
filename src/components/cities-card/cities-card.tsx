import { FC } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { FullOffer, OffersList } from "../../types/offer";
import mockOffersList from "../../mocks/offers-list";

interface CitiesCardProps {
	offer: FullOffer;
}

const CitiesCard: FC<CitiesCardProps> = ({ offer }) => {
	const previewImage = mockOffersList.find(
		(_offer) => _offer.id == offer.id
	)?.previewImage;

	return (
		<article className="cities__card place-card">
			{offer.isPremium && (
				<div className="place-card__mark">
					<span>Premium</span>
				</div>
			)}
			<div className="cities__image-wrapper place-card__image-wrapper">
				<Link to={`${AppRoute.Offer}/${offer.id}`}>
					<img
						className="place-card__image"
						src={`img/${previewImage}`}
						width="260"
						height="200"
						alt={offer.title}
					/>
				</Link>
			</div>
			<div className="place-card__info">
				<div className="place-card__price-wrapper">
					<div className="place-card__price">
						<b className="place-card__price-value">&euro;{offer.price}</b>
						<span className="place-card__price-text">&#47;&nbsp;night</span>
					</div>
					<button
						className={`place-card__bookmark-button button ${
							offer.isFavorite ? "place-card__bookmark-button--active" : ""
						}`}
						type="button"
					>
						<svg className="place-card__bookmark-icon" width="18" height="19">
							<use xlinkHref="#icon-bookmark"></use>
						</svg>
						<span className="visually-hidden">
							{offer.isFavorite ? "In bookmarks" : "To bookmarks"}
						</span>
					</button>
				</div>
				<div className="place-card__rating rating">
					<div className="place-card__stars rating__stars">
						<span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
				<h2 className="place-card__name">
					<a href="#">{offer.title}</a>
				</h2>
				<p className="place-card__type">{offer.type}</p>
			</div>
		</article>
	);
};

export default CitiesCard;
