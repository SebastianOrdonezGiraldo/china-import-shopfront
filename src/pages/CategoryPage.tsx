
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ImageWithFallback from '../components/ImageWithFallback';

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const [categoryProducts, setCategoryProducts] = useState([]);
  
  useEffect(() => {
    if (id) {
      const filtered = products.filter(product => product.category === id);
      setCategoryProducts(filtered);
    }
  }, [id]);
  
  const category = categories.find(cat => cat.id === id);
  
  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Categoría No Encontrada</h1>
          <p className="text-gray-600 mb-6">La categoría que estás buscando no existe.</p>
          <Link 
            to="/categories" 
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Ver todas las categorías
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="text-sm breadcrumbs text-gray-500 mb-2">
            <ul className="flex space-x-2">
              <li><Link to="/" className="hover:text-primary">Inicio</Link></li>
              <li className="before:content-['/'] before:mr-2">
                <Link to="/categories" className="hover:text-primary">Categorías</Link>
              </li>
              <li className="before:content-['/'] before:mr-2">{category.name}</li>
            </ul>
          </div>
          
          <div className="relative mb-6">
            <div className="h-40 w-full rounded-lg overflow-hidden">
              <ImageWithFallback
                src={category.image}
                alt={category.name}
                className="object-cover"
                fallbackSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h1 className="text-white text-2xl md:text-3xl font-bold">
                  {category.name}
                </h1>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryProducts.length > 0 ? (
            categoryProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No hay productos en esta categoría.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
