import { Link } from "react-router-dom";

const MyIntro = () => {
  return (
    <div className="py-32 w-10/12 md:w-3/5 mx-auto flex flex-col gap-3">
      <span className="font-space text-xl md:text-2xl leading-8 md:leading-9">
        Hi, I'm Akshat Gangi and this is my blog.
        <span className="text-[rgba(116,122,175,1)]">
          {" "}
          Here I share my journey as a frontend developer. I write about
          everything I'm learning React, Framer-motion, UI/UX, animations.
        </span>
      </span>
      <Link
        to={"/about-me"}
        className="w-fit bg-slate-200 text-blue-600 text-sm px-3 py-1 rounded-md hover:shadow-[0_0_30px_rgba(74,91,205,1)] transition-all duration-300"
      >
        About me
      </Link>
    </div>
  );
};

export default MyIntro;
