import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import SongBtn from "../ui/SongBtn";
import { gsap } from "gsap";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const menuItems = mobileMenuRef.current?.children;

    if (isMobileMenuOpen && menuItems) {
      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        display: "flex",
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.fromTo(
        menuItems,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: "power3.out" }
      );
    } else if (mobileMenuRef.current) {
      gsap.to(menuItems, {
        y: -30,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => {
          gsap.to(mobileMenuRef.current, {
            display: "none",
            opacity: 0,
            duration: 0.1,
          });
        },
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-8 md:top-5 md:left-1/2 md:transform md:-translate-x-1/2 z-50 w-full px-4 md:px-6 lg:px-10">
        <div className="bg-[#333] text-white rounded-3xl shadow-lg max-w-7xl mx-auto py-3 px-5 md:px-10 flex justify-between items-center">
          <a href="#" className="text-lg md:text-2xl font-bold tracking-tight">
            Tirtho Dev
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 text-md lg:text-lg font-medium">
            <a href="#work" className="hover:text-red-400 transition">
              Work
            </a>
            <a href="#experience" className="hover:text-red-400 transition">
              Experience
            </a>
            <a href="#projects" className="hover:text-red-400 transition">
              Projects
            </a>
          </div>

         
          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <div className="relative group overflow-hidden  rounded-xl md:block hidden md:visible">
              <button className="relative z-10 px-2 md:px-6 py-1 md:py-2 text-white border border-white rounded-xl font-semibold group-hover:text-black transition-colors duration-1000 text-[13px]">
                Contact Me
              </button>
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-2 h-2 bg-[#e7e6ef] rounded-xl scale-0 group-hover:scale-[100] transition-transform duration-700 ease-in-out origin-center z-0"></span>
              </span>
            </div>
            <SongBtn />

            {/* for mobile menu */}
            <div className="md:hidden z-50">
            <button onClick={toggleMobileMenu} className="text-white text-2xl">
              { <FiMenu />}
            </button>
          </div>
          </div>
           {/* Mobile Menu Button */}
          

        </div>
      </div>
      

      {/* Mobile Fullscreen Overlay */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-0 bg-[#1e1e1e] z-[999] flex-col items-center justify-center text-white text-3xl space-y-10 px-6 transition-opacity duration-300 ${
          isMobileMenuOpen ? "flex opacity-100" : "hidden opacity-0"
        }`}
      >
          <div className="md:hidden z-50">
            <button onClick={toggleMobileMenu} className="text-white text-2xl bg-green-500 rounded-full p-2">
              {<FiX />}
            </button>
          </div>
        <a href="#work" onClick={() => setIsMobileMenuOpen(false)}>
          Work
        </a>
        <a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>
          Experience
        </a>
        <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
          Projects
        </a>
        <div className="relative group overflow-hidden inline-block rounded-xl">
          <button className="relative z-10 px-6 py-2 text-white border border-white rounded-xl font-semibold group-hover:text-black transition-colors duration-1000 text-lg">
            Contact Me
          </button>
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-2 h-2 bg-[#e7e6ef] rounded-xl scale-0 group-hover:scale-[100] transition-transform duration-700 ease-in-out origin-center z-0"></span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;