import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { counterItems } from "../../constants";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const containerRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(
    () => {
      const boxes = countersRef.current;

      boxes.forEach((box, index) => {
        // Slide-in animation
        gsap.fromTo(
          box,
          {
            x: index < 2 ? -100 : 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: box,
              start: "top 90%",
              once: true,
            },
          }
        );

        const numberElement = box.querySelector(".counter-number");
        const item = counterItems[index];

        gsap.set(numberElement, { innerText: "0" });

        // Counting animation
        gsap.to(numberElement, {
          innerText: item.value,
          duration: 2.5,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: box,
            start: "top 90%",
            once: true, // Only trigger once when it comes into view
          },
          onUpdate: function () {
            numberElement.textContent = `${Math.ceil(this.targets()[0].innerText)}${item.suffix}`;
          },
          onComplete: () => {
            numberElement.textContent = `${item.value}${item.suffix}`;
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div id="counter" ref={containerRef} className="w-full py-10"> {/* Added some padding/margin */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-3 mx-auto max-w-7xl"> {/* Added max-w and mx-auto for better centering */}
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