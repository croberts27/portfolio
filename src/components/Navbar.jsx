import { Link, useLocation } from "react-router-dom";

import { Menu } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    // Check if the current location matches the path
    if (location.pathname === "/projects") {
      return "text-black"; // For Contact page or any other page
    }
    if (location.pathname === "/contact-event-attendees") {
      return "text-black"; // For Contact page or any other page
    }
    if (location.pathname === "/contact-event-hoteliers") {
      return "text-black"; // For Contact page or any other page
    } else if (path === "/" && location.pathname !== "/") {
      return "text-white"; // For Home page
    }
    return "text-black"; // Default color for other pages
  };

  return (
    <header className="absolute  shadow-md inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between
   p-6 lg:px-12"
        aria-label="Global"
      >
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            className={`border-gray-300 inline-flex items-center border-b-2 px-1 pt-1 text-xl font-medium ${isActive(
              "/"
            )}`}
            to="/"
          >
            About
          </Link>
          <Link
            className={`inline-flex items-center border-gray-300 border-b-2 px-1 pt-1 text-xl font-medium ${isActive(
              "/blogs"
            )}`}
            to="/blogs"
          >
            Blogs
          </Link>

          <Link
            className={`border-gray-300 inline-flex w-full items-center justify-center border-b-2 px-1 pt-1 text-xl font-medium text-black ${isActive(
              "/projects"
            )}`}
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className={`border-gray-300 inline-flex w-full items-center justify-center border-b-2 px-1 pt-1 text-xl font-medium text-black ${isActive(
              "/skills"
            )}`}
            to="/skills"
          >
            Skills
          </Link>
          <Link
            className={`border-gray-300 inline-flex w-full items-center justify-center border-b-2 px-1 pt-1 text-xl font-medium text-black ${isActive(
              "/experience"
            )}`}
            to="/experience"
          >
            Experience
          </Link>

          {/* <Link
            className="inline-flex items-center border-b-2 border-white px-1 pt-1 text-xl font-medium text-white"
            to="/projects"
          >
            Contact Us
          </Link> */}
        </div>
        <div className="flex lg:flex-1 justify-end items-center">
          <Link className="-m-1.5 p-1.5" to="/">
            <img
              className="h-20 w-auto"
              src="src\images\profPic.PNG"
              alt="Calvin Matson-Roberts"
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          {/* <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">TCI Housing</span>
                  <img
                    className="h-8 w-auto"
                    src="./src/images/tci-logo-trans.png"
                    alt="tci logo"
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2  py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog> */}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
