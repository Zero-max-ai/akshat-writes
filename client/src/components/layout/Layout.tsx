import Navbar from "../Navbar";
import Footer from "../Footer";

import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="py-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
