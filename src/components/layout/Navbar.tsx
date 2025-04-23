
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from '@/components/stock/Search';

const Navbar = () => {
  const [isLoggedIn] = useState(true);

  return (
    <nav className="bg-financial-navy text-white py-3 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="text-financial-highlight mr-1">Market</span>
            Beacon
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/dashboard" className="hover:text-financial-highlight transition-colors">Dashboard</Link>
            <Link to="/watchlist" className="hover:text-financial-highlight transition-colors">Watchlist</Link>
            <Link to="/news" className="hover:text-financial-highlight transition-colors">News</Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-64">
            <Search />
          </div>
          {isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <button className="bg-financial-highlight hover:bg-blue-700 text-white py-1 px-3 rounded-md text-sm">
                Portfolio
              </button>
              <div className="w-8 h-8 bg-gray-400 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/32" alt="User avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          ) : (
            <div className="flex space-x-2">
              <button className="bg-transparent border border-financial-highlight text-financial-highlight hover:bg-financial-highlight hover:text-white py-1 px-3 rounded-md text-sm transition-colors">
                Log In
              </button>
              <button className="bg-financial-highlight hover:bg-blue-700 text-white py-1 px-3 rounded-md text-sm">
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
