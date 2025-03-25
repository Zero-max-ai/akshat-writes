import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();
  const padding = useTransform(scrollY, [0, 40], ["40px 0px", "20px 0px"]);

  return (
    <motion.header
      style={{ padding }}
      className="fixed top-0 left-0 w-full backdrop-blur-md transition-all duration-300"
    >
      <div className="w-10/12 md:w-3/5 mx-auto flex justify-between items-center">
        <Link to={"/"}>AkshatGangi</Link>
        <div className="flex gap-5 max-md:gap-2">
          <button>Search</button>
          <button>Theme</button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
