import { useEffect, useState } from "react";
import gsap from "gsap";
import { BsLightbulb } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import Button from "../ui/Button";
import HeroExperience from "../model/Hero-Model/HeroExperience";

const words = [
  {
    text: "Code",
    icon: <FaCode className="text-yellow-400" size={28} />,
  },
  {
    text: "Ideas",
    icon: <BsLightbulb className="text-yellow-400" size={28} />,
  },
  { text: "Concepts", icon: <GiBrain className="text-pink-400" size={28} /> },
  {
    text: "Designs",
    icon: <FaPaintBrush className="text-green-400" size={26} />,
  },
];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(".changing-word", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: () => {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        },
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".changing-word",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }, [currentWordIndex]);

  useEffect(() => {
    gsap.fromTo(
      ".hero-line",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.4,
        ease: "power2.out",
      }
    );
  }, []);
  //for 3d m
  useEffect(() => {
    gsap.fromTo(
      ".hero-3d-container",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 1,
      }
    );
  }, []);
  

  return (
    <div className="relative h-screen w-full overflow-hidden md:flex items-center justify-between px-4">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 z-10">
        <div className="text-2xl md:text-4xl lg:text-5xl font-bold">
          <h1 className="hero-line flex items-center gap-3">
            Shaping{" "}
            <span className="changing-word inline-flex items-center gap-2 text-blue-400">
              {words[currentWordIndex].icon}
              {words[currentWordIndex].text}
            </span>
          </h1>
          <h1 className="hero-line mt-2">Into The Real Project</h1>
          <h1 className="hero-line mt-2">That Deliver The World</h1>
        </div>
        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none mt-5 hero-line">
          Hi, I’m Tirtho Dev, a developer based in Croatia with a passion for
          code.
        </p>
        <div className="mt-4 hero-line relative">
          <Button text="See My Work" />
        </div>
      </div>

      {/* Right 3D Section */}
      <figure>
        <div className="hero-3d-container absolute top-0 right-0 mt-0 md:mt-0 md:top-10 md:right-[-80px] w-full md:w-[70%] h-full z-0">
          <HeroExperience />
        </div>
      </figure>
     
    </div>
  );
};

export default Hero;
