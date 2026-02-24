'use client';

import React from 'react';
import { Search, Menu } from 'lucide-react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const AppDownloadSection = () => {
  return (
    <section className="relative w-full min-h-[500px] py-20 overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/appDownloads.png')" }}
      />
      
      <div className="absolute inset-0 z-10 bg-white/35" />

      <div className="relative z-20 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:justify-between">
          
    
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            {/* Phone Frame */}
            <div className="relative w-[320px] h-[520px] bg-white rounded-[40px] border-[8px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col translate-y-10">
              
              
              <div className="flex justify-between items-center px-6 py-3 bg-white">
                <span className="text-[11px] font-bold text-[#333]">5:13</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-3.5 h-2.5 flex gap-[1px] items-end">
                    <div className="w-[2px] h-[30%] bg-[#333]" />
                    <div className="w-[2px] h-[50%] bg-[#333]" />
                    <div className="w-[2px] h-[75%] bg-[#333]" />
                    <div className="w-[2px] h-[100%] bg-[#333]" />
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg>
                  <div className="w-5 h-2.5 border border-[#333] rounded-sm relative">
                    <div className="absolute left-0 top-0 h-full bg-[#333] w-[80%]" />
                  </div>
                </div>
              </div>

             
              <div className="px-4 py-2">
                <div className="bg-white rounded-[12px] p-3 shadow-sm border border-gray-50 flex items-center gap-3">
                  <Menu size={18} className="text-gray-400" />
                  <div>
                    <p className="text-[8px] font-bold text-gray-400 tracking-wider">CURRENT LOCATION</p>
                    <p className="text-[13px] font-extrabold text-[#0D1B5E] flex items-center gap-1">
                      15A, JAMES STREET <span className="text-[10px]">▼</span>
                    </p>
                  </div>
                </div>
              </div>

            
              <div className="flex-1 bg-gray-50/50 rounded-t-[24px] p-5 mt-2">
                <p className="text-[11px] font-bold text-[#B8860B] mb-1">HELLO JOYBOY 👋</p>
                <h3 className="text-[20px] font-extrabold text-[#0D1B5E] leading-[1.3] mb-4">
                  What you are looking <br /> for today
                </h3>

               
                <div className="bg-white border border-[#E5E7EB] rounded-[10px] p-1.5 flex items-center">
                  <input 
                    type="text" 
                    placeholder="Search what you need..." 
                    className="flex-1 text-[12px] px-2 outline-none text-gray-400"
                  />
                  <div className="bg-[#1A73E8] p-1.5 rounded-[8px] text-white">
                    <Search size={14} />
                  </div>
                </div>

                
                <div className="mt-6 bg-[#E8F5F0] rounded-[15px] p-4 h-32 border border-[#D1E7DD]">
                  <p className="text-[10px] font-medium text-gray-600 flex items-center gap-1">
                    Offer AC Service <span className="text-[8px] border border-gray-400 rounded-full w-3 h-3 flex items-center justify-center">i</span>
                  </p>
                  <p className="text-[24px] font-extrabold text-[#0D1B5E] mt-1">Get 25%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-[40px] lg:text-[44px] font-[800] text-[#1A1A1A] leading-[1.2]">
              The one app you need to <br />
              get <span className="text-[#1A73E8]">everything done.</span>
            </h2>
            <p className="mt-4 text-[15px] text-[#6B7280] font-[400] leading-[1.6] max-w-[420px]">
              Take Project name with you, on your phone. Find, book and manage your Home services all in one place.
            </p>

     
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
         
              <button className="bg-black hover:bg-[#1A1A1A] transition-all hover:scale-[1.03] text-white rounded-[10px] px-5 py-2.5 flex items-center gap-3 w-fit">
                <FaApple size={24} />
                <div className="text-left">
                  <p className="text-[10px] leading-tight font-[400]">Download on the</p>
                  <p className="text-[16px] leading-tight font-[700]">App Store</p>
                </div>
              </button>

              {/* Google Button */}
              <button className="bg-black hover:bg-[#1A1A1A] transition-all hover:scale-[1.03] text-white rounded-[10px] px-5 py-2.5 flex items-center gap-3 w-fit">
                <FaGooglePlay size={22} className="text-white" />
                <div className="text-left">
                  <p className="text-[10px] leading-tight font-[400]">GET IT ON</p>
                  <p className="text-[16px] leading-tight font-[700]">Google Play</p>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;