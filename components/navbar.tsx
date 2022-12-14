import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/Image";
import { useRouter } from "next/router";
import logo from "../public/images/logo.svg";
function Navbar() {
  const router = useRouter();

  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    // close navbar when different page
    const handleRouteChange = () => {
      setNavbarOpen(false);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // detect whether user has scrolled the page down by 10px

  return (
    <header className=" w-full z-30  transition duration-300 ease-in-out bg-white">
      <nav className="px-10 lg:px-40 mx-auto">
        <div className="flex flex-wrap items-center justify-between py-2 md:py-4">
          {/* Site branding */}
          <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
            {/* <div className="w-full flex-grow flex-row justify-between md:w-auto mr-4"> !!!!!! mr-4 */}
            {/* Logo */}
            <Link href="/">
              <a className="pt-2 " aria-label="Tech Support">
                <Image src={logo} />
              </a>
            </Link>

            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="focus:outline-none leading-none md:hidden px-4"
              aria-label="Navbar Toggle"
            >
              <svg
                className={
                  "text-gray-600 hover:text-gray-400" +
                  (navbarOpen
                    ? " hidden"
                    : " animate__animated animate__fadeIn animate__faster")
                }
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className={
                  "text-gray-600 hover:text-gray-400 " +
                  (!navbarOpen
                    ? " hidden"
                    : " animate__animated animate__fadeIn animate__faster")
                }
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>

          {/* Site navigation */}
          <div
            className={
              "md:flex flex-grow items-center transition-opacity" +
              (navbarOpen
                ? " flex animate__animated animate__fadeIn animate__fast"
                : " hidden") // TODO: make this transition
            }
          >
            <ul className="flex flex-grow flex-col md:flex-row md:justify-end flex-wrap md:items-center">
              <li>
                <a href="/" className="">
                  <button className="font-bold text-gray-400 pl-16 pb-4  md:px-5 px-2 py-3 flex items-center transition duration-150 ease-in-out">
                    Login
                  </button>
                </a>
              </li>
              {/* <li> */}
              <div title="About"></div>
              <div title="Media"></div>
              {/* </li> */}
              <li>
                <a href="/" className="pl-12">
                  <a className="bg-teal-300 hover:bg-teal-500  text-white font-bold lg:py-3 lg:px-6 rounded-full py-2 px-4">
                    <button>Sign Up</button>
                  </a>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
