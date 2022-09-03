import { motion } from "framer-motion";
import {} from "react-icons/fi";

import "animate.css";

import {
  FiTwitter,
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import Image from "next/Image";
import work from "../public/images/illustration-working.svg";
import { useInView } from "react-intersection-observer";
function Intro() {
  return (
    <section className="px-10 lg:px-40 mx-auto max-w-8xl font-sans pt-20 pb-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div>
          <h1 className="text-4xl lg:text-6xl text-violet-900 block pb-4 font-bold font-sans leading-tight">
            More than just shorter links
          </h1>
          <span className="block pb-6 text-gray-400 text-lg md:text-xl lg:pr-50">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </span>
          <button className="bg-teal-300 hover:bg-teal-500  text-white font-bold lg:py-4 lg:px-12 rounded-full py-2 px-8">
            Get Started
          </button>
        </div>
        <div>
          <Image src={work}></Image>
        </div>
      </div>
    </section>
  );
}

export default Intro;
