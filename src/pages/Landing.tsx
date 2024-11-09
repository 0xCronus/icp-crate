import React, { useState } from "react";
import { Cloud, Zap, Menu, X } from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-blue-400">
      {/* Navigation Bar */}
      <nav className="px-4 py-4 max-w-6xl mx-auto flex items-center justify-between relative">
        <div className="flex items-center space-x-2">
          <Zap className="w-6 h-6 text-white" />
          <span className="text-black font-bold text-xl">VAULTed</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button className="px-4 py-2 bg-white rounded-full text-black font-medium">
            Home
          </button>
          <button className="text-black">About</button>
          <button className="text-black">Docs</button>
          <button className="px-6 py-2 bg-yellow-400 rounded-full text-black font-medium hover:bg-yellow-300 transition-colors">
            Launch App
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-lg md:hidden">
            <button className="w-full text-left px-4 py-2 text-black hover:bg-gray-100">
              Home
            </button>
            <button className="w-full text-left px-4 py-2 text-black hover:bg-gray-100">
              About
            </button>
            <button className="w-full text-left px-4 py-2 text-black hover:bg-gray-100">
              Docs
            </button>
            <button className="w-full text-left px-4 py-2 text-yellow-500 hover:bg-gray-100">
              Launch App
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative max-w-6xl mx-auto mt-8 md:mt-12 px-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-10 md:p-16 relative overflow-hidden">
          {/* Cloud Decorations - Responsive sizes */}
          <div className="absolute top-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-1/4 w-20 md:w-24 h-20 md:h-24 bg-white rounded-full translate-y-1/2" />

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black mb-2 md:mb-4">
               VAULTed
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-black/80 font-light">
              DeFi yields, designed
              <br className="hidden sm:block" />
              for everyone
            </h2>
            <div className="text-xs text-black/50 mt-2">built during ICP Hackathon, Bangkok 2024</div>
          </div>

          {/* Decorative Hands - Hidden on mobile */}
          <div className="hidden md:block absolute top-4 right-8">
            <svg
              className="w-16 md:w-24 h-16 md:h-24 text-gray-300"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.5 21C5.1 21 4 19.9 4 18.5V7.5C4 6.1 5.1 5 6.5 5C7.9 5 9 6.1 9 7.5V18.5C9 19.9 7.9 21 6.5 21Z"
              />
            </svg>
          </div>
          <div className="hidden md:block absolute bottom-4 left-8">
            <svg
              className="w-16 md:w-24 h-16 md:h-24 text-gray-300"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.5 21C5.1 21 4 19.9 4 18.5V7.5C4 6.1 5.1 5 6.5 5C7.9 5 9 6.1 9 7.5V18.5C9 19.9 7.9 21 6.5 21Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
