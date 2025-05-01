
import { useState } from 'react';
import { categories } from '../data/products';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="mb-8">
      <div className="relative mb-6">
        {selectedCategory !== 'all' ? (
          <div className="h-40 w-full rounded-lg overflow-hidden">
            <img 
              src={categories.find(cat => cat.id === selectedCategory)?.image || categories[0].image} 
              alt={categories.find(cat => cat.id === selectedCategory)?.name || "All Products"}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-3xl font-bold">
                {categories.find(cat => cat.id === selectedCategory)?.name || "All Products"}
              </h2>
            </div>
          </div>
        ) : (
          <div className="h-40 w-full rounded-lg overflow-hidden">
            <img 
              src={categories[0].image} 
              alt="All Products"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-3xl font-bold">All Products</h2>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex overflow-x-auto pb-2 space-x-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`px-4 py-2 whitespace-nowrap rounded-full text-sm ${
              selectedCategory === category.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            } transition-colors`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
