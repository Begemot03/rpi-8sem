import { FC } from "react";
import Review from "./review";
import { TReview } from "../../mocks/reviews";

interface IReviewListProps {
	reviews: TReview[];
}

const ReviewList: FC<IReviewListProps> = ({ reviews }) => {
	return (
		<ul className="reviews__list">
			{reviews.length > 0 &&
				reviews.map((review) => <Review key={review.id} review={review} />)}
		</ul>
	);
};

export default ReviewList;
