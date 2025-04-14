import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto fixed z-100">
        <Navbar />
      </div>
      <div className="pt-28">
        {" "}
        {/* Padding to avoid overlap */}
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
