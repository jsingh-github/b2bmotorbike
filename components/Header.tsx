'use client';

import { Search, ShoppingCart, Menu, User } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-gray-100 text-xs py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <span>US Store</span>
            <span>|</span>
            <span>English</span>
            <span>|</span>
            <span>USD $</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-600">FIND A STORE</a>
            <span>|</span>
            <a href="#" className="hover:text-red-600">HELP</a>
            <span>|</span>
            <a href="#" className="hover:text-red-600">JOIN US</a>
            <span>|</span>
            <a href="#" className="hover:text-red-600">SIGN IN</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center">
              <div className="w-12 h-12 bg-black flex items-center justify-center">
                <span className="text-white font-bold text-2xl">FOX</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#" className="text-sm font-medium hover:text-red-600">New</a>
              <a href="#" className="text-sm font-medium hover:text-red-600">Men's</a>
              <a href="#" className="text-sm font-medium hover:text-red-600">Women's</a>
              <a href="#" className="text-sm font-medium hover:text-red-600">Youth</a>
              <a href="#" className="text-sm font-medium hover:text-red-600">Fox.com</a>
            </nav>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm w-48"
              />
            </div>

            {/* Icons */}
            <button className="hover:text-red-600">
              <Search className="w-5 h-5 md:hidden" />
            </button>
            <button className="hover:text-red-600">
              <User className="w-5 h-5" />
            </button>
            <button className="hover:text-red-600 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button
              className="lg:hidden hover:text-red-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-sm font-medium hover:text-red-600">New</a>
              <a href="#" className="text-sm font-medium hover:text-red-600">Men's</a>
              <a href="#" className="text-sm font-medium hover:text-red-600">Women's</a>
              <a href="#" className="text-sm font-medium hover:text-red-600">Youth</a>
              <a href="#" className="text-sm font-medium hover:text-red-600">Fox.com</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
