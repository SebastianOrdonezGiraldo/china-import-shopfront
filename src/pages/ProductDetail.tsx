import { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LikeDislikeButtons from '../components/LikeDislikeButtons';
import ProductGallery from '../components/ProductGallery';
import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';
import { Button } from "@/components/ui/button";
import { CartContext } from '../contexts/CartContext';
import { useToast } from '../hooks/use-toast';

// Helper function to extract YouTube video ID
const getYoutubeVideoId = (url: string): string | null => {
  const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || '0');
  const { addToCart } = useContext(CartContext);
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Producto No Encontrado</h1>
          <p className="text-gray-600 mb-6">El producto que estás buscando no existe o ha sido eliminado.</p>
          <Link 
            to="/" 
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Volver al Inicio
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Producto añadido",
      description: `${product.name} ha sido añadido a tu carrito.`,
    });
  };
  
  const handleBuyNow = () => {
    addToCart(product, quantity);
    // Navigate to checkout
    window.location.href = '/checkout';
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  // Get YouTube video ID if available
  const videoId = product.videoUrl ? getYoutubeVideoId(product.videoUrl) : null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-sm breadcrumbs text-gray-500 mb-6">
          <ul className="flex space-x-2">
            <li><Link to="/" className="hover:text-primary">Inicio</Link></li>
            <li className="before:content-['/'] before:mr-2">
              <Link to={`/categories/${product.category}`} className="hover:text-primary">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Link>
            </li>
            <li className="before:content-['/'] before:mr-2">{product.name}</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductGallery images={product.images} name={product.name} />
            
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <p className="text-2xl text-primary font-bold mb-4">${product.price.toFixed(2)}</p>
              
              <div className="mb-6">
                <LikeDislikeButtons initialLikes={product.likes} initialDislikes={product.dislikes} />
              </div>
              
              <div className="prose max-w-none mb-6">
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  Cantidad
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-full sm:w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-md transition-colors mb-4"
              >
                Añadir al Carrito
              </button>
              
              <button 
                onClick={handleBuyNow}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium py-3 px-4 rounded-md transition-colors"
              >
                Comprar Ahora
              </button>
            </div>
          </div>
        </div>
        
        {product.videoUrl && (
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">Video del Producto</h2>
            {videoId ? (
              <div className="w-full aspect-w-16 aspect-h-9 relative rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Video de ${product.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            ) : (
              <div className="w-full h-0 pt-[56.25%] bg-gray-100 relative rounded-lg flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">No se puede cargar el video</p>
                  <p className="text-sm text-gray-400 absolute bottom-4">URL del Video: {product.videoUrl}</p>
                </div>
              </div>
            )}
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Reseñas de Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <ReviewList productId={product.id} />
            </div>
            <div className="md:col-span-1">
              <ReviewForm productId={product.id} />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
