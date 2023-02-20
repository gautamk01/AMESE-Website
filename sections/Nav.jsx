import { motion } from "framer-motion";
import styles from "../styles";
import styles1 from "@/styles/Nav.module.css";
import { navVariants } from "../utils/motion";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Nava = (props) => {
  const [active, setactive] = useState(false);

  props.func(active);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className=" absolute w-[50%] inset-0 gradient1" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between items-center `}
      >
        <div className="flex flex-wrap justify-center">
          <img src="/worldwide.png" alt="cover" className=" h-5 w-5"></img>
          <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
            AMESE
          </h2>
        </div>
        {active ? (
          <GiHamburgerMenu
            onClick={() => {
              setactive(!active);
            }}
            className={`${styles1.menu}  text-cyan-50 text-[40px] p-1`}
          />
        ) : (
          <FaSearch
            onClick={() => {
              setactive(!active);
            }}
            className={`${styles1.menu}  text-cyan-50 text-[40px] p-1`}
          />
        )}

        <ul
          className={`text-white flex flex-wrap flex-row w-[50%] justify-center ${styles1.val}`}
        >
          <li className={`font-semibold  text-xl ${styles1.val}`}>Home </li>
          <li className={`font-semibold  text-xl ${styles1.val}`}>About Us</li>
          <li className={`font-semibold  text-xl ${styles1.val}`}>Members</li>
          <li className={`font-semibold  text-xl ${styles1.val}`}>
            Achivements
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};
export default Nava;
