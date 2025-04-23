
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from '@/components/stock/Search';
import { useAuth } from "@/hooks/useAuth";
import { User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate("/auth");
  };

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
          {user ? (
            <div className="flex items-center space-x-3">
              <Link to="/dashboard">
                <Button variant="secondary" className="py-1 px-3 text-sm flex items-center gap-2">
                  <User className="w-4 h-4" /> {profile?.username || profile?.full_name || "Profile"}
                </Button>
              </Link>
              <Button
                className="bg-transparent border border-financial-highlight text-financial-highlight hover:bg-financial-highlight hover:text-white py-1 px-3 rounded-md text-sm transition-colors flex items-center gap-1"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4" /> Log Out
              </Button>
            </div>
          ) : (
            <div className="flex space-x-2">
              <Link to="/auth">
                <Button className="bg-transparent border border-financial-highlight text-financial-highlight hover:bg-financial-highlight hover:text-white py-1 px-3 rounded-md text-sm transition-colors">
                  Log In / Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
