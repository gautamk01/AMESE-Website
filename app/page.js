"use client";
import { motion } from "framer-motion";
import styles from "@/styles";
import {
  Navbar,
  Mainpage,
  AboutUs,
  GroupMembers,
  Footer,
  Teamup,
} from "@/sections";

export default function Home() {
  return (
    <div className=" bg-primary-black">
      <Navbar />
      <Teamup />
      <Mainpage />
      <AboutUs />
      <GroupMembers />
      {/* <Footer /> */}
    </div>
  );
}
