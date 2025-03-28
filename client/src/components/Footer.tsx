import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-[#2d2d2d] border-t w-full py-10">
      <div className="w-10/12 md:w-3/5 mx-auto flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <Link to={"/"}>Home</Link>
          <Link to={"/about-me"}>About</Link>
          <Link to={"/my-resources"}>My Resources</Link>
        </div>
        <div className="flex flex-col gap-1">
          <Link to={"https://www.linkedin.com/in/akshat-gangi-b457a61ab/"} target={"_blank"}>LinkedIn</Link>
          <Link to={"/my-portfolio"} target={"blank"}>Twitter</Link>
          <Link to={"https://github.com/Zero-max-ai"} target={"blank"}>Github</Link>
        </div>
        <div className="flex flex-col gap-1">
          <Link to={"/my-portfolio"}>Portfolio</Link>
          <Link to={"/my-stack"}>My Stack</Link>
          <Link to={"/buy-me-coffe"}>Buy me a coffee</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
