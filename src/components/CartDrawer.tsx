
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, total } = useContext(CartContext);
  
  return (
    <div className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-xl z-50 transform ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    } transition-transform duration-300 flex flex-col`}>
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center">
          <ShoppingCart className="mr-2" size={20} />
          <h2 className="text-lg font-semibold">Tu Carrito</h2>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close cart"
        >
          <X size={20} />
        </button>
      </div>
      
      <div className="flex-grow overflow-y-auto p-4">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <ShoppingCart size={48} strokeWidth={1.5} />
            <p className="mt-4 text-lg">Tu carrito está vacío</p>
            <Button 
              onClick={onClose} 
              variant="link" 
              className="mt-2 text-primary"
            >
              Continuar Comprando
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map(item => (
              <CartItem 
                key={item.product.id} 
                product={item.product} 
                quantity={item.quantity} 
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}
          </div>
        )}
      </div>
      
      {cartItems.length > 0 && (
        <div className="p-4 border-t">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total:</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
          
          <div className="space-y-2">
            <Link to="/checkout" onClick={onClose} className="w-full">
              <Button className="w-full">
                Finalizar Compra
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={clearCart}
            >
              Vaciar Carrito
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDrawer;
