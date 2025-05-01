
import { useParams, Link } from 'react-router-dom';
import { products, reviews } from '../data/products';
import Navbar from '../components/Navbar';
import LikeDislikeButtons from '../components/LikeDislikeButtons';
import ProductGallery from '../components/ProductGallery';
import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || '0');
  
  const product = products.find(p => p.id === productId);
  const productReviews = reviews.filter(r => r.productId === productId);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/" 
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-primary mb-6 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Products
        </Link>
        
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
              
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-md transition-colors mb-4">
                Add to Cart
              </button>
              
              <button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium py-3 px-4 rounded-md transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        
        {product.videoUrl && (
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">Product Video</h2>
            <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-0 pt-[56.25%] bg-gray-100 relative rounded-lg flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">Video player would be embedded here</p>
                  <p className="text-sm text-gray-400 absolute bottom-4">Video URL: {product.videoUrl}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <ReviewList reviews={productReviews} />
            </div>
            <div className="md:col-span-1">
              <ReviewForm productId={product.id} />
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-white py-8 border-t mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>&copy; 2025 ChiImport. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;
