
import { useState } from 'react';
import { products } from '../data/products';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </main>
      
      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>&copy; 2025 ChiImport. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
