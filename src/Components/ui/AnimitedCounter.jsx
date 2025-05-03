import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { counterItems } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const containerRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    const boxes = countersRef.current;

    // Slide-in animation
    boxes.forEach((box, index) => {
      gsap.from(box, {
        x: index < 2 ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: box,
          start: "top 90%",
        },
      });
    });

    // Counting animation
    boxes.forEach((box, index) => {
      const numberElement = box.querySelector(".counter-number");
      const item = counterItems[index];

      gsap.set(numberElement, { innerText: "0" });

      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: box,
          start: "top 90%",
        },
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    });
  }, []);

  return (
    <div id="counter" ref={containerRef} className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-3 ">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="w-full border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300 rounded-xl p-10 flex flex-col items-center justify-center text-center"
          >
            <div className="counter-number text-white text-5xl font-extrabold mb-2">
              0{item.suffix}
            </div>
            <div className="text-gray-300 text-lg font-medium">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
