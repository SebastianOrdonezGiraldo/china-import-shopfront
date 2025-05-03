
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";
import { Product } from '../data/products';

interface CartItemProps {
  product: Product;
  quantity: number;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem = ({ product, quantity, onUpdateQuantity, onRemove }: CartItemProps) => {
  const [imageLoading, setImageLoading] = useState(true);
  
  const handleImageLoad = () => {
    setImageLoading(false);
  };
  
  const handleIncrement = () => {
    onUpdateQuantity(product.id, quantity + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      onUpdateQuantity(product.id, quantity - 1);
    }
  };
  
  return (
    <div className="flex items-center py-4 border-b last:border-b-0">
      <div className="relative h-16 w-16 flex-shrink-0">
        {imageLoading && (
          <Skeleton className="absolute inset-0 w-full h-full" />
        )}
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover rounded"
          onLoad={handleImageLoad}
          style={{ opacity: imageLoading ? 0 : 1 }}
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <Link to={`/product/${product.id}`} className="text-sm font-medium line-clamp-1 hover:text-primary transition-colors">
          {product.name}
        </Link>
        <div className="text-sm text-gray-500 mt-1">
          ${product.price.toFixed(2)} x {quantity} = ${(product.price * quantity).toFixed(2)}
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="flex items-center border rounded">
          <button 
            onClick={handleDecrement} 
            className="px-2 py-1 text-gray-500 hover:text-primary transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="px-2 text-sm">{quantity}</span>
          <button 
            onClick={handleIncrement} 
            className="px-2 py-1 text-gray-500 hover:text-primary transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
        
        <button 
          onClick={() => onRemove(product.id)} 
          className="text-gray-400 hover:text-destructive transition-colors"
          aria-label="Remove item"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
