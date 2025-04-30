import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FiMenu, FiX } from "react-icons/fi";
import SongBtn from "../ui/SongBtn";

const Navbar = () => {
  const navbarRef = useRef(null);
  const overlayRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (navbarRef.current && !menuOpen) {
            gsap.to(navbarRef.current, {
              y: currentScrollY > lastScrollY.current ? -150 : 0,
              duration: 0.6,
              ease: "power2.out",
            });
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const openMenu = () => {
    setMenuOpen(true);
    gsap.fromTo(
      overlayRef.current,
      { y: "-100%", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    gsap.to(overlayRef.current, {
      y: "-100%",
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        setMenuOpen(false);
        document.body.style.overflow = "auto";
      },
    });
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed w-full top-10 left-1/2 transform -translate-x-1/2 z-50 px-2 md:px-4 lg:px-6"
      >
        <div className="flex justify-between items-center bg-[#575353] shadow-md rounded-3xl py-4 max-w-7xl mx-auto px-4 md:px-6 lg:px-6">
          <div className="md:text-xl lg:text-2xl font-bold text-white tracking-tight">
            <a href="#">Tirtho Dev</a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10 text-white font-medium md:text-md lg:text-lg">
            <a href="#work" className="hover:text-red-400 transition duration-200">Work</a>
            <a href="#experience" className="hover:text-red-400 transition duration-200">Experience</a>
            <a href="#projects" className="hover:text-red-400 transition duration-200">Projects</a>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <div className="relative group overflow-hidden inline-block rounded-xl hidden md:block">
              <button className="relative z-10 px-6 py-2 text-white border border-white rounded-xl font-semibold group-hover:text-black transition-colors duration-1000">
                Contact Me
              </button>
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-2 h-2 bg-[#e7e6ef] rounded-xl scale-0 group-hover:scale-[100] transition-transform duration-700 ease-in-out origin-center z-0"></span>
              </span>
            </div>
            <SongBtn />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white text-3xl"
              onClick={menuOpen ? closeMenu : openMenu}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full Screen Overlay */}
      {menuOpen && (
        <div
          ref={overlayRef}
          className="fixed top-0 left-0 w-full h-screen bg-[#1e1e1e] z-[999] flex flex-col items-center justify-center text-white text-3xl space-y-8 overflow-hidden"
        >
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact Me</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
