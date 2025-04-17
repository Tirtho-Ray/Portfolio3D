import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className=" z-50 " >
        <Navbar />
      </div>
      <div className="pt-40 lg:pt-28 px-2 md:px-4 lg:px-0">
       
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
