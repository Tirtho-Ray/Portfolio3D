import { useEffect, useState } from "react";
import gsap from "gsap";

const words = ["Ideas", "Concepts", "Designs"];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate fade out
      gsap.to(".changing-word", {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: () => {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        },
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate fade in after word changes
    gsap.fromTo(
      ".changing-word",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }, [currentWordIndex]);

  return (
    <div className="mt-28 mb-28">
      <div>
        <div className="lg:text-4xl font-bold hero-text">
          <h1 className="flex items-center gap-2">
            Shaping{" "}
            <span className="changing-word inline-block text-blue-400">
              {words[currentWordIndex]}
            </span>
          </h1>
          <h1>Into The Real Project</h1>
          <h1>That Deliver The World</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
