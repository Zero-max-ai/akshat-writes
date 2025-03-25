import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-[#2d2d2d] border-t w-full py-10">
      <div className="w-10/12 md:w-3/5 mx-auto flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <Link to={"/"}>Home</Link>
          <Link to={""}>About</Link>
          <Link to={""}>My Resources</Link>
        </div>
        <div className="flex flex-col gap-1">
          <Link to={""}>LinkedIn</Link>
          <Link to={""}>Twitter</Link>
          <Link to={""}>Github</Link>
        </div>
        <div className="flex flex-col gap-1">
          <Link to={""}>Portfolio</Link>
          <Link to={""}>My Stack</Link>
          <Link to={""}>Buy me a coffee</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
