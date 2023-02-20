import { navVariants } from '../utils/motion';
import { motion } from "framer-motion";

const Main = () => (
    <motion.div className="h-[100vh] w-[100%] flex flex-wrap justify-center items-center">
        <motion.div
            variants={navVariants}
            initial='hidden'
            whileInView="show"
            className="h-[40%] w-[40%] bg-purple-700 rounded-md opacity-50"></motion.div>
    </motion.div>
);

export default Main;

