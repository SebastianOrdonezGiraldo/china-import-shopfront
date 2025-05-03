
import { useContext, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { CartContext } from '../contexts/CartContext';
import CartDrawer from './CartDrawer';

const CartIcon = () => {
  const { itemCount } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  
  return (
    <>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={openCart}
        className="relative"
        aria-label="Open cart"
      >
        <ShoppingCart size={20} />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary rounded-full text-xs text-white w-5 h-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Button>
      
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      
      {/* Overlay when cart is open */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeCart}
        />
      )}
    </>
  );
};

export default CartIcon;
