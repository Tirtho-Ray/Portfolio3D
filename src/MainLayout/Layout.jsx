import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Section/Hero";
import Loader from "../Components/ui/Loader";

const MainLayout = () => {
   const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smooth: true,
      smoothTouch: true,
      direction: "vertical",
      gestureDirection: "vertical",
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Optional scroll listener
    // lenis.on("scroll", ({ scroll }) => {
    //   console.log(scroll);
    // });

    return () => {
      lenis.destroy(); // cleanup
    };
  }, []);

   if (isLoading) {
    return <Loader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="md:max-w-7xl mx-auto">
      <div><Navbar /></div>

      <main className="pt-28 lg:pt-0 px-2 md:px-4 lg:px-0 text-white">
        <section id="home"><Hero /></section>
        <section id="work">Work Section</section>
        <section id="experience">Experience Section</section>
        <section id="projects">Projects Section</section>
        <section id="contact">Contact Section</section>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
