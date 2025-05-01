
import { Review } from '../data/products';
import StarRating from './StarRating';

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList = ({ reviews }: ReviewListProps) => {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-8 bg-gray-50 rounded-lg">
        <p className="text-gray-500">No reviews yet. Be the first to leave a review!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {reviews.map(review => (
        <div key={review.id} className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <StarRating rating={review.rating} />
            <div className="text-sm text-gray-500">
              <span>{review.date}</span>
              <span className="mx-1">•</span>
              <span>{review.city}</span>
            </div>
          </div>
          <p className="text-gray-700">{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
