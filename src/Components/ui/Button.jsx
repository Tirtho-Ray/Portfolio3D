import { useRef, useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import gsap from 'gsap';

const Button = ({ text, className }) => {
  const arrowRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Y-axis bounce animation (looped with debounce effect)
  useEffect(() => {
    const bounce = gsap.timeline({ repeat: -1, yoyo: true });
    bounce.to(arrowRef.current, {
      y: -5,
      duration: 0.3,
      ease: "power1.inOut",
    }).to(arrowRef.current, {
      y: 5,
      duration: 0.3,
      ease: "power1.inOut",
    });

    return () => bounce.kill();
  }, []);

  // X-axis movement on hover
  useEffect(() => {
    if (hovered) {
      gsap.to(arrowRef.current, {
        x: 8,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(arrowRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [hovered]);

  return (
    <button
      className={`group flex items-center gap-2 text-[13px] px-4 py-2 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg transition-all duration-300 hover:from-indigo-500 hover:to-blue-600 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
      <span ref={arrowRef}>
        <FiArrowRight size={22} />
      </span>
    </button>
  );
};

export default Button;
