import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    // Check if the current location matches the path
    if (location.pathname === "/contact-event-ops") {
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
    return "text-white"; // Default color for other pages
  };

  const arrowIcon = (path) => {
    if (location.pathname === "/contact-event-ops") {
      return "text-black";
    }
    if (location.pathname === "/contact-event-ops") {
      return "text-black"; // For Contact page or any other page
    }
    if (location.pathname === "/contact-event-attendees") {
      return "text-black"; // For Contact page or any other page
    }
    if (location.pathname === "/contact-event-hoteliers") {
      return "text-black"; // For Contact page or any other page
    } else if (path === "/" && location.pathname === "/") {
      return "text-white";
    }
    return "text-white";
  };

  return (
    <header className="absolute shadow-sm inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between
   p-6 lg:px-12"
        aria-label="Global"
      >
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            className={`border-gray-300 inline-flex items-center border-b-2 px-1 pt-1 text-xl font-medium ${isActive(
              "/about"
            )}`}
            to="/about"
          >
            About
          </Link>
          <Link
            className={`inline-flex items-center border-gray-300 border-b-2 px-1 pt-1 text-xl font-medium ${isActive(
              "/events"
            )}`}
            to="/events"
          >
            Events
          </Link>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className={`border-gray-300 inline-flex w-full items-center justify-center border-b-2 px-1 pt-1 text-xl font-medium text-black ${isActive(
                  "/contact-event-ops"
                )}`}
              >
                Contact Us
                <ChevronDownIcon
                  className={`-mr-1 h-5 w-5 text-black ${arrowIcon(
                    "/contact-event-ops"
                  )}`}
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/contact-event-ops"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Event Operators
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/contact-event-attendees"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Event Attendees
                      </Link>
                    )}
                  </Menu.Item>
                </div>

                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/contact-event-hoteliers"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Hoteliers
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* <Link
            className="inline-flex items-center border-b-2 border-white px-1 pt-1 text-xl font-medium text-white"
            to="/contact-event-ops"
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
