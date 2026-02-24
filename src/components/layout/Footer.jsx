'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FaYoutube, 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter 
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1A9DCC]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        
        {/* PART 1: MAIN FOOTER */}
        <div className="flex flex-col justify-between py-[48px] pb-[40px] md:flex-row md:items-start">
          
          {/* LEFT SIDE: Description & Socials */}
          <div className="mb-10 w-full md:mb-0 md:w-[40%]">
            <p className="max-w-[280px] text-[15px] font-[400] leading-[1.6] text-white">
              Project name is your premier destination for top-notch smart home service and repair.
            </p>
            
            <div className="mt-[28px] flex items-center gap-[20px]">
              <Link href="#" className="text-white transition-opacity hover:opacity-70">
                <FaYoutube size={22} />
              </Link>
              <Link href="#" className="text-white transition-opacity hover:opacity-70">
                <FaInstagram size={22} />
              </Link>
              <Link href="#" className="text-white transition-opacity hover:opacity-70">
                <FaFacebookF size={20} />
              </Link>
              <Link href="#" className="text-white transition-opacity hover:opacity-70">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="text-white transition-opacity hover:opacity-70">
                <MdEmail size={22} />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: Navigation Columns */}
          <div className="flex w-full gap-[60px] sm:gap-[80px] md:w-[40%] md:justify-end">
            
            {/* Column 1 - Company */}
            <div className="flex flex-col">
              <h4 className="mb-[20px] text-[16px] font-[700] text-white">
                Company
              </h4>
              <nav className="flex flex-col gap-[16px]">
                <Link href="#" className="text-[15px] font-[400] text-white hover:underline hover:opacity-80">
                  About us
                </Link>
                <Link href="#" className="text-[15px] font-[400] text-white hover:underline hover:opacity-80">
                  Services
                </Link>
                <Link href="#" className="text-[15px] font-[400] text-white hover:underline hover:opacity-80">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Column 2 - Legal */}
            <div className="flex flex-col">
              <h4 className="mb-[20px] text-[16px] font-[700] text-white">
                Legal
              </h4>
              <nav className="flex flex-col gap-[16px]">
                <Link href="#" className="text-[15px] font-[400] text-white hover:underline hover:opacity-80">
                  Terms
                </Link>
                <Link href="#" className="text-[15px] font-[400] text-white hover:underline hover:opacity-80">
                  Privacy
                </Link>
                <Link href="#" className="text-[15px] font-[400] text-white hover:underline hover:opacity-80">
                  Become a pro
                </Link>
              </nav>
            </div>

          </div>
        </div>

        {/* PART 2: BOTTOM BAR */}
        <div className="w-full">
          {/* Divider Line */}
          <div className="h-[1px] w-full bg-white/25" />
          
          {/* Copyright */}
          <div className="py-[20px] text-center">
            <p className="text-[14px] font-[400] text-white">
              ©2025 Project name . All rights reserved
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;