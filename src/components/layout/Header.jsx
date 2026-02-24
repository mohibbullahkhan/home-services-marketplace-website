'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
// import Logo from '@/assets/logo.png';
import Image from 'next/image';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_1px_6px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Side: Logo */}
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="flex items-center">
            <div className="relative flex h-10 w-10 items-center justify-center ">
              {/* Simple House SVG placeholder matching your screenshot */}
              
                <Image src="/logo.png" alt="Jocebmadani Logo" width={80}
                  height={80} className="h-full w-full" />
            </div>
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden md:ml-10 md:flex md:items-center md:gap-x-9">
          <Link 
            href="/" 
            className="relative h-[72px] flex items-center text-[15px] font-medium text-[#1A73E8] transition-colors"
          >
            Home
            <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-t-full bg-[#1A73E8]" />
          </Link>
          
          <button className="group flex items-center gap-1 text-[15px] font-medium text-[#333333] transition-colors hover:text-[#1A73E8]">
            Explore Services
            <ChevronDown size={16} className="mt-0.5 text-[#333333] group-hover:text-[#1A73E8]" />
          </button>
          
          <Link 
            href="/become-a-pro" 
            className="text-[15px] font-medium text-[#333333] transition-colors hover:text-[#1A73E8]"
          >
            Become a Pro
          </Link>
        </nav>

        {/* Right Side: Auth Buttons (Desktop) */}
        <div className="hidden items-center gap-4 md:flex">
          <Link 
            href="/signin" 
            className="rounded-[8px] border-[1.5px] border-[#1A73E8] px-[22px] py-[10px] text-[15px] font-semibold text-[#1A73E8] transition-all hover:bg-blue-50"
          >
            Sign In
          </Link>
          <Link 
            href="/signup" 
            className="rounded-[8px] bg-[#1A73E8] px-[22px] py-[10px] text-[15px] font-semibold text-white transition-all hover:bg-[#1558B0]"
          >
            Create Account
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#333333] hover:text-[#1A73E8]"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white p-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-[16px] font-medium text-[#1A73E8]">Home</Link>
            <Link href="/explore" className="text-[16px] font-medium text-[#333333]">Explore Services</Link>
            <Link href="/become-a-pro" className="text-[16px] font-medium text-[#333333]">Become a Pro</Link>
            <hr className="border-gray-100" />
            <Link href="/signin" className="w-full text-center rounded-[8px] border-[1.5px] border-[#1A73E8] py-2.5 font-semibold text-[#1A73E8]">
              Sign In
            </Link>
            <Link href="/signup" className="w-full text-center rounded-[8px] bg-[#1A73E8] py-2.5 font-semibold text-white">
              Create Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;