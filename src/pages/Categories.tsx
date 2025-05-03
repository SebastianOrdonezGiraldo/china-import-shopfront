
import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageWithFallback from '../components/ImageWithFallback';

const Categories = () => {
  // Skip the "all" category
  const displayCategories = categories.filter(category => category.id !== 'all');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Categorías</h1>
          <div className="text-sm breadcrumbs text-gray-500 mt-2">
            <ul className="flex space-x-2">
              <li><Link to="/" className="hover:text-primary">Inicio</Link></li>
              <li className="before:content-['/'] before:mr-2">Categorías</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCategories.map(category => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-48 relative">
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  fallbackSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h2 className="text-white text-xl md:text-2xl font-bold">
                    {category.name}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
