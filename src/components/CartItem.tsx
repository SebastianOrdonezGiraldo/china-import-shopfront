
import { Link } from 'react-router-dom';
import { X, Plus, Minus } from 'lucide-react';
import { Product } from '../data/products';
import ImageWithFallback from './ImageWithFallback';

interface CartItemProps {
  product: Product;
  quantity: number;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem = ({ product, quantity, onUpdateQuantity, onRemove }: CartItemProps) => {
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
        <ImageWithFallback
          src={product.images[0]}
          alt={product.name}
          className="object-cover rounded"
          fallbackSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          skeletonClassName="rounded"
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
