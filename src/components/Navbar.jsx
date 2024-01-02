/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  return (
    <header className="absolute shadow-md inset-x-0 top-0 z-50">
      <nav
        className="flex flex-col lg:flex-row items-start justify-between p-5 lg:px-12"
        aria-label="Global"
      >
        {/* Mobile Menu */}
        <Disclosure as="div" className="lg:hidden">
          <Disclosure.Button
            className="inline-flex justify-start items-start border-gray-300 text-xl font-medium focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel
            className={classNames(
              "bg-white shadow-md absolute top-full left-0 right-0 z-50",
              { hidden: !isOpen }
            )}
          >
            <div className="flex flex-col gap-4 p-4">
              <Link
                to="/"
                className="text-black text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/blog"
                className="text-black text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              <Link
                to="/projects"
                className="text-black text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/skills"
                className="text-black text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
            </div>
          </Disclosure.Panel>
        </Disclosure>

        {/* Desktop Menu */}
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
      </nav>
    </header>
  );
}

export default Navbar;
