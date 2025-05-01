
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="text-xl font-bold text-gray-800">ChiImport</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
          <Link to="/" className="text-gray-600 hover:text-primary transition-colors">Categories</Link>
          <Link to="/" className="text-gray-600 hover:text-primary transition-colors">New Arrivals</Link>
          <Link to="/" className="text-gray-600 hover:text-primary transition-colors">Deals</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
