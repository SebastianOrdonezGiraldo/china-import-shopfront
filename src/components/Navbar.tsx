
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import CartIcon from './CartIcon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
    if (!isSearchExpanded) {
      setTimeout(() => document.getElementById('search-input')?.focus(), 100);
    }
  };
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    setSearchTerm('');
    setIsSearchExpanded(false);
  };

  return (
    <header className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary flex-shrink-0">
            ChiImport
          </Link>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-primary transition-colors">
              Categorías
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
              Nosotros
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <div className="relative">
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <input
                  id="search-input"
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`bg-gray-100 rounded-full transition-all duration-300 ${
                    isSearchExpanded
                      ? 'w-48 pl-4 pr-10 py-2 opacity-100'
                      : 'w-0 pl-0 pr-0 py-0 opacity-0'
                  } focus:outline-none`}
                />
                <Button
                  type={isSearchExpanded ? 'submit' : 'button'}
                  onClick={toggleSearch}
                  variant="ghost"
                  size="icon"
                  className="absolute right-0"
                  aria-label={isSearchExpanded ? 'Submit search' : 'Open search'}
                >
                  <Search size={18} />
                </Button>
              </form>
            </div>
            
            {/* Cart */}
            <CartIcon />
            
            {/* Mobile menu button */}
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link to="/" className="text-xl font-bold text-primary" onClick={closeMenu}>
            ChiImport
          </Link>
          <Button
            onClick={closeMenu}
            variant="ghost"
            size="icon"
            aria-label="Close menu"
          >
            <X size={20} />
          </Button>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="block py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Categorías
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Navbar;
