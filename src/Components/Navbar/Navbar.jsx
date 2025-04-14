import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Navbar = () => {
  const navbarRef = useRef(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false); // To prevent multiple animations from triggering at once

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (navbarRef.current) {
            if (currentScrollY > lastScrollY.current) {
              // Scrolling Down
              gsap.to(navbarRef.current, {
                y: -100, // Move up
                duration: 0.6, // Smooth transition
                ease: "power2.out",
              });
            } else {
              // Scrolling Up
              gsap.to(navbarRef.current, {
                y: 0, // Move back to top
                duration: 0.6, // Smooth transition
                ease: "power2.out",
              });
            }
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <section>
    {/* <div className="absolute top-0 left-0 z-10 w-full">
        <img src="/public/bg.png" alt="" />
      </div> */}
     <header
      ref={navbarRef}
      className="bg-[#575353] shadow-md max-w-7xl mx-auto rounded-3xl fixed top-6 left-0 right-0 z-50 px-4"
    >
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white-50 tracking-tight">
          <Link to="/">Tirtho Dev</Link>
        </div>

        {/* Nav Links */}
        <nav className="flex space-x-10 text-white font-medium text-lg">
          <Link to="/" className="hover:text-red-400 transition duration-200">
            Work
          </Link>
          <Link to="/" className="hover:text-red-400 transition duration-200">
            Experience
          </Link>
          <Link to="/" className="hover:text-red-400 transition duration-200">
            Projects
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="relative group overflow-hidden inline-block rounded-full">
          <button className="relative z-10 px-6 py-2 text-white-50 border border-white rounded-full font-semibold group-hover:text-black-50 transition-colors duration-1000">
            Contact Me
          </button>

          {/* Middle Dot that expands to full bg */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-2 h-2 bg-[#e7e6ef] rounded-full scale-0 group-hover:scale-[100] transition-transform duration-700 ease-in-out origin-center z-0"></span>
          </span>
        </div>
      </div>
    </header>
   </section>
  );
};

export default Navbar;
