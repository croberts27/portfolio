import { Link, useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const location = useLocation();

  return (
    <header className="absolute  shadow-md inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between
   p-6 lg:px-12"
        aria-label="Global"
      >
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            className={`border-gray-300 inline-flex items-center border-b-2 px-1 pt-1 text-xl font-medium`}
            to="/"
          >
            About
          </Link>
          <Link
            className={`inline-flex items-center border-gray-300 border-b-2 px-1 pt-1 text-xl font-medium `}
            to="/blog"
          >
            Blogs
          </Link>

          <Link
            className={`border-gray-300 inline-flex w-full items-center justify-center border-b-2 px-1 pt-1 text-xl font-medium text-black `}
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className={`border-gray-300 inline-flex w-full items-center justify-center border-b-2 px-1 pt-1 text-xl font-medium text-black `}
            to="/skills"
          >
            Skills
          </Link>
        </div>
        <div className="flex lg:flex-1 justify-end items-center">
          <Link className="-m-1.5 p-1.5" to="/">
            <img
              className="h-20 w-auto rounded-full"
              src="src\images\profPic.jpg"
              alt="Calvin Matson-Roberts"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
