import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Home from './../Pages/Home/Home';

const MainLayout = () => {
  return (
   <div className="md:max-w-7xl mx-auto">
      <div className="z-50">
        <Navbar />
      </div>

      <main className="pt-28 lg:pt-24 px-2 md:px-4 lg:px-0 text-white min-h-[70vh]">
        <section id="home" className="py-10"><Home /></section>
        <section id="work" className="py-10 h-screen">Work Section</section>
        <section id="experience" className="py-10">Experience Section</section>
        <section id="projects" className="py-10">Projects Section</section>
        <section id="contact" className="py-10">Contact Section</section>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
