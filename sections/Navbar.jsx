import styles from "@/styles/Nav.module.css";
import { navVariants } from "../utils/motion";
import { motion } from "framer-motion";
import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [responsive, setresponsive] = useState(true);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 z-10  "
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto ">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="./worldwide.png"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            AMESE
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={String.valueOf(responsive)}
          onClick={() => {
            setresponsive(!responsive);
          }}
        >
          <span className="sr-only">Open main menu</span>
          {responsive ? (
            <motion.div variants={navVariants} initial="up" whileInView="show">
              <RxHamburgerMenu />
            </motion.div>
          ) : (
            <motion.div variants={navVariants} initial="up" whileInView="show">
              <RxCross1 />
            </motion.div>
          )}
        </button>
        <motion.div
          variants={navVariants}
          initial="up"
          whileInView="show"
          className={` ${responsive ? "hidden" : ""} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Achievement
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Group Members
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
