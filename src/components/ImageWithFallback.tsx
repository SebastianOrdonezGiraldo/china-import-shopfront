
import { useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  skeletonClassName?: string;
}

const ImageWithFallback = ({
  src,
  alt,
  className = '',
  fallbackSrc = "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
  skeletonClassName = ''
}: ImageWithFallbackProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };
  
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };
  
  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <Skeleton className={`absolute inset-0 w-full h-full ${skeletonClassName}`} />
      )}
      <img 
        src={hasError ? fallbackSrc : src} 
        alt={alt}
        className={`w-full h-full ${className}`}
        onLoad={handleLoad}
        onError={handleError}
        style={{ opacity: isLoading ? 0 : 1 }}
      />
    </div>
  );
};

export default ImageWithFallback;
