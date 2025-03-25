import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-[90vh] w-full flex items-center justify-center">
      <div className="max-sm:w-10/12 mx-auto flex flex-col justify-center">
        <h1 className="text-4xl max-md:text-2xl">404 Not Found</h1>
        <span className="text-xl max-md:text-sm">Oh no! You just got lost !</span>
        <span className="text-xl max-md:text-sm">
          Don't worry I got you!{" "}
          <Link to={"/"} className="underline underline-offset-4 text-blue-500">
            Click here
          </Link>{" "}
          to go back home.
        </span>
      </div>
    </div>
  );
};

export default NotFound;
