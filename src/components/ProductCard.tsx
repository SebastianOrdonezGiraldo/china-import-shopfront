
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import LikeDislikeButtons from './LikeDislikeButtons';
import { Skeleton } from "@/components/ui/skeleton";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, price, images, likes, dislikes } = product;
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/product/${id}`} className="block">
        <div className="h-48 overflow-hidden relative">
          {imageLoading && (
            <Skeleton className="absolute inset-0 w-full h-full" />
          )}
          <img 
            src={images[0]} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onLoad={handleImageLoad}
            style={{ opacity: imageLoading ? 0 : 1 }}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-800 line-clamp-2 h-14">{name}</h3>
          <div className="mt-2 flex justify-between items-center">
            <p className="text-primary font-bold">
              ${price.toFixed(2)}
            </p>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4 pt-0">
        <LikeDislikeButtons initialLikes={likes} initialDislikes={dislikes} />
      </div>
    </div>
  );
};

export default ProductCard;
