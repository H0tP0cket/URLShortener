import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {} from "react-icons/fi";
import Image from "next/image";

import "animate.css";

import { useEffect } from "react";
import {
  FiTwitter,
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

function Card(stats: any) {
  return (
    <div key={stats.id} className="h-auto font-sans">
      <div className="">
        <img
          src={stats.image}
          alt=" random imgee"
          className=" bg-violet-900 shadow-md p-4 rounded-full"
        />
        <motion.div
          whileHover={{
            transition: { duration: 0.3 },
            y: -20,
            scale: 1.03,
          }}
          className=" -mt-16 px-4  "
        >
          <div className="rounded-md bg-white p-6 shadow-lg">
            <h4 className="mt-1  uppercase leading-tight text-violet-900 text-2xl pb-6 font-bold">
              {stats.title}
            </h4>

            <div className="mt-1 overflow-hidden text-gray-400 leading-relaxed">
              <p>{stats.content}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Card;
