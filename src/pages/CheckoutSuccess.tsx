
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";

const CheckoutSuccess = () => {
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <Check className="h-10 w-10 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-3">¡Pedido Completado!</h1>
          <p className="text-gray-600 mb-6">
            Gracias por tu compra. Tu pedido ha sido procesado con éxito.
          </p>
          
          <div className="bg-gray-50 rounded p-4 mb-6">
            <p className="text-gray-500 mb-2">Número de Pedido:</p>
            <p className="text-lg font-semibold">{orderNumber}</p>
          </div>
          
          <p className="text-gray-600 mb-6">
            Hemos enviado un correo electrónico con los detalles de tu pedido.
            Puedes seguir el estado de tu envío con el número de pedido.
          </p>
          
          <div className="space-y-3">
            <Link to="/" className="w-full block">
              <Button className="w-full">
                Volver a la Tienda
              </Button>
            </Link>
            
            <Link to="/contact" className="w-full block">
              <Button variant="outline" className="w-full">
                Contáctanos
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CheckoutSuccess;
