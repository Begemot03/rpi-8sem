import { FC } from "react";
import { TReview } from "../../mocks/reviews";

interface IReviewProps {
	review: TReview;
}

function formatDate(dateStr: string): string {
	const date = new Date(dateStr);
	const options: Intl.DateTimeFormatOptions = {
		month: "long",
		year: "numeric",
	};
	return date.toLocaleDateString("ru-RU", options);
}

const Review: FC<IReviewProps> = ({ review }) => {
	return (
		<li className="reviews__item">
			<div className="reviews__user user">
				<div className="reviews__avatar-wrapper user__avatar-wrapper">
					<img
						className="reviews__avatar user__avatar"
						src={`/img/${review.user.avatarUrl}`}
						width="54"
						height="54"
						alt="Reviews avatar"
					/>
				</div>
				<span className="reviews__user-name">{review.user.name}</span>
			</div>
			<div className="reviews__info">
				<div className="reviews__rating rating">
					<div className="reviews__stars rating__stars">
						<span style={{ width: "80%" }}></span>
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
				<p className="reviews__text">{review.comment}</p>
				<time
					className="reviews__time"
					dateTime="2019-04-24"
					style={{ textTransform: "capitalize" }}
				>
					{formatDate(review.date)}
				</time>
			</div>
		</li>
	);
};

export default Review;
