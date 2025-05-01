
import { useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

const ProductGallery = ({ images, name }: ProductGalleryProps) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [imageLoading, setImageLoading] = useState(true);
  const [thumbsLoading, setThumbsLoading] = useState<{[key: number]: boolean}>({});

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleThumbLoad = (index: number) => {
    setThumbsLoading(prev => ({ ...prev, [index]: false }));
  };

  return (
    <div className="w-full">
      <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 relative">
        {imageLoading && (
          <Skeleton className="absolute inset-0 w-full h-[400px]" />
        )}
        <img 
          src={mainImage} 
          alt={name} 
          className="w-full h-[400px] object-contain"
          onLoad={handleImageLoad}
          style={{ opacity: imageLoading ? 0 : 1 }}
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
              {thumbsLoading[index] !== false && (
                <Skeleton className="absolute inset-0 w-full h-full" />
              )}
              <img 
                src={image} 
                alt={`${name} - Image ${index + 1}`} 
                className="w-full h-full object-cover"
                onLoad={() => handleThumbLoad(index)}
                style={{ opacity: thumbsLoading[index] !== false ? 0 : 1 }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
