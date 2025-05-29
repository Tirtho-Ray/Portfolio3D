import Typewriter from 'typewriter-effect';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Loader = ({ onComplete }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setTimeout(onComplete, 1000),
    });

    tl.to(".loader-content", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    }).to(".loader", {
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: "power1.out",
    });
  }, [onComplete]);

  return (
    <div className="loader fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <div className="loader-content text-center opacity-0">
        <h1 className="text-3xl font-bold tracking-widest mb-4">
          <Typewriter
            options={{
              strings: ['Welcome to', 'Introducing...'],
              autoStart: true,
              loop: false,
              delay: 50,
            }}
          />
        </h1>
        <h2 className="text-5xl font-extrabold mt-2">DevAura</h2>
      </div>
    </div>
  );
};

export default Loader;
