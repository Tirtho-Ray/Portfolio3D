"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import SongBtn from "../ui/SongBtn";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const lenisRef = useRef(null); // Store Lenis instance

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (id) => {
    const target = document.querySelector(id);
    if (target && lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: 0,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

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

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed left-0 right-0 z-50 transition-[top] duration-500 max-w-7xl mx-auto mt-5 md:mt-0  ${
          scrolled
            ? "top-3 md:top-8 backdrop-filter backdrop-blur-md bg-opacity-30 rounded-3xl md:bg-[#333]"
            : "top-0"
        }`}
      >
        <div className="md:bg-none text-white rounded-3xl shadow-lg max-w-7xl mx-auto py-3 md:py-4 px-5 md:px-10 flex justify-between items-center border-1 md:border-0 ">
          <button
            onClick={() => handleScroll("#home")}
            className="text-lg md:text-2xl font-bold tracking-tight cursor-pointer"
          >
            Tirtho Dev
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 text-md lg:text-lg font-medium ">
            <button
              onClick={() => handleScroll("#work")}
              className="relative group transition text-white cursor-pointer"
            >
              Work
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleScroll("#skills")}
              className="relative group transition text-white cursor-pointer"
            >
              Skills
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleScroll("#experience")}
              className="relative group transition text-white cursor-pointer"
            >
              Experience
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleScroll("#projects")}
              className="relative group transition text-white cursor-pointer"
            >
              Projects
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <div className="relative group overflow-hidden rounded-xl md:block hidden md:visible cursor-pointer">
              <button className="relative z-10 px-2 md:px-6 py-1 md:py-2 text-white border border-white rounded-xl  group-hover:text-black transition-colors duration-900 text-[13px] md:text-[16px] font-bold cursor-pointer">
                Contact Me
              </button>
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-2 h-2 bg-[#e7e6ef] rounded-xl scale-0 group-hover:scale-[100] transition-transform duration-1500 ease-in-out origin-center z-0"></span>
              </span>
            </div>
            <SongBtn />

            {/* Mobile Menu Icon */}
            <div className="md:hidden z-50">
              <button
                onClick={toggleMobileMenu}
                className="text-white text-2xl"
              >
                <FiMenu />
              </button>
            </div>
          </div>
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
          <button
            onClick={toggleMobileMenu}
            className="text-white text-2xl bg-green-500 rounded-full p-2"
          >
            <FiX />
          </button>
        </div>
        <button onClick={() => handleScroll("#work")}>Work</button>
        <button onClick={() => handleScroll("#experience")}>Experience</button>
        <button onClick={() => handleScroll("#projects")}>Projects</button>
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
