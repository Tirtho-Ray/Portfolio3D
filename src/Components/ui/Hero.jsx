import { useEffect, useState } from "react";
import gsap from "gsap";
import { BsLightbulb } from "react-icons/bs";
import { GiBrain } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";

const words = [
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

  // Word change animation
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

  // Word fade up
  useEffect(() => {
    gsap.fromTo(
      ".changing-word",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }, [currentWordIndex]);

  // Initial fade-up animation for all h1 lines one-by-one
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

  return (
    <div className="mt-28 mb-28">
      <div>
        <div className="lg:text-5xl font-bold">
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
        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none mt-5 hero-line ">
          Hi,am Tirtho Dev, a developer based in Croatia with a passion for code.
        </p>
      </div>
    </div>
  );
};

export default Hero;
