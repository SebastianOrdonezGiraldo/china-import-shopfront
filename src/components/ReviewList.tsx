
import { useQuery } from '@tanstack/react-query';
import { Review } from '../data/products';
import StarRating from './StarRating';
import { Skeleton } from "@/components/ui/skeleton";

interface ReviewListProps {
  productId: number;
}

const fetchReviews = async (productId: number): Promise<Review[]> => {
  try {
    // En un entorno real, esta URL apuntaría a tu servidor PHP
    const response = await fetch(`/api/reviews?productId=${productId}`);
    
    if (!response.ok) {
      throw new Error('Error al cargar las reseñas');
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};

const ReviewList = ({ productId }: ReviewListProps) => {
  const { data: reviews, isLoading, error } = useQuery({
    queryKey: ['reviews', productId],
    queryFn: () => fetchReviews(productId),
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="h-16 w-full mt-2" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 bg-gray-50 rounded-lg">
        <p className="text-red-500">Error al cargar las reseñas. Por favor, intenta de nuevo más tarde.</p>
      </div>
    );
  }

  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-center py-8 bg-gray-50 rounded-lg">
        <p className="text-gray-500">No hay reseñas aún. ¡Sé el primero en dejar una reseña!</p>
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
