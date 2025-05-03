
import { useState } from 'react';
import ImageWithFallback from './ImageWithFallback';
import { Skeleton } from "@/components/ui/skeleton";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

const ProductGallery = ({ images, name }: ProductGalleryProps) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="w-full">
      <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 relative">
        <ImageWithFallback
          src={mainImage}
          alt={name}
          className="w-full h-[400px] object-contain"
          fallbackSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
        />
      </div>
      
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setMainImage(image)}
              className={`rounded overflow-hidden flex-shrink-0 w-16 h-16 border-2 transition-colors relative ${
                mainImage === image ? 'border-primary' : 'border-transparent'
              }`}
            >
              <ImageWithFallback
                src={image}
                alt={`${name} - Image ${index + 1}`}
                className="object-cover"
                fallbackSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                skeletonClassName="rounded"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
