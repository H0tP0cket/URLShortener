import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {} from "react-icons/fi";
import Image from "next/image";
import halal from "../public/images/evenmorehalalmodeme.png";
import "animate.css";

import { useEffect } from "react";
import {
  FiTwitter,
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import Card from "../components/card";
import Data from "../components/data";

function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  return (
    <div className="  min-h-screen flex-col items-center justify-center bg-gray-200 py-2 pt-80 ">
      <h1 className="mb-4 text-5xl text-violet-900 leading-tighter font-bold tracking-tighter  md:text-5xl text-center">
        Advanced Statistics
      </h1>
      <div className="leading-none font-semibold">
        <span className="block pb-6 text-gray-400 text-lg md:text-xl  text-center = ">
          Track how your links are performing across the web with
        </span>
        <span className="block pb-6 text-gray-400 text-lg md:text-xl  text-center  ">
          our advanced statistics dashboard
        </span>
        <div className="grid grid-cols-1 gap-12 overflow-y-hidden px-16 md:grid-cols-3 md:px-40">
          {Data.map((stats) => (
            <Card
              key={stats.id}
              title={stats.title}
              image={stats.image}
              content={stats.content}
            />
          ))}{" "}
        </div>
      </div>
    </div>
  );
}

export default Stats;
