
import { categories } from '../data/products';
import ImageWithFallback from './ImageWithFallback';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory) || 
    (selectedCategory === 'all' ? { name: "All Products", image: categories[0].image } : categories[0]);

  return (
    <div className="mb-8">
      <div className="relative mb-6">
        <div className="h-40 w-full rounded-lg overflow-hidden">
          <ImageWithFallback
            src={selectedCategoryData.image}
            alt={selectedCategoryData.name}
            className="object-cover"
            fallbackSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              {selectedCategoryData.name}
            </h2>
          </div>
        </div>
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
