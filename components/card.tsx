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
    <div key={stats.id} className="h-auto relative  font-sans">
      <div className="pl-8 z-50  ">
        <img
          src={stats.image}
          alt=" random imgee"
          className=" absolute z-50 bg-violet-800 shadow-md p-4 rounded-full -top-12  "
        />
      </div>
      <div className="max-w-md content-center z-0">
        <div className=" z-0   ">
          <div className="rounded-md bg-white p-6 shadow-lg">
            <h4 className="mt-1   leading-tight text-violet-900 text-2xl pb-6 font-bold">
              {stats.title}
            </h4>

            <div className="  text-gray-400 leading-relaxed">
              <p>{stats.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
