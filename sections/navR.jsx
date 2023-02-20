import { useState } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Navr = (props) => {
  console.log(props.val);
  const [hidden, sethidden] = useState(props.val);
  if (props.val) {
    return <Navrav />;
  }
  return <></>;
};
const Navrav = () => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className=" flex flex-wrap flex-col justify-center items-center"
    >
      <ul>
        <li className="m-9 text-white">Home </li>
      </ul>
      <ul>
        <li className="m-9 text-white">About</li>
      </ul>
      <ul>
        <li className="m-9 text-white">Members</li>
      </ul>
      <ul>
        <li className="m-9 text-white">Achivement </li>
      </ul>
    </motion.div>
  );
};

export default Navr;
