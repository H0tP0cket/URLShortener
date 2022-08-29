import { motion } from "framer-motion";
import {} from "react-icons/fi";

import "animate.css";
import Image from "next/image";
import {
  FiTwitter,
  FiInstagram,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import fb from "../public/images/icon-facebook.svg";
import twitter from "../public/images/icon-twitter.svg";
import pinterest from "../public/images/icon-pinterest.svg";
import ig from "../public/images/icon-instagram.svg";

function Footer() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  return (
    <div className="left-0 right-0 w-full   bg-violet-900 px-40   ">
      <div className="py-4 md:flex md:items-center md:justify-between md:py-8 ">
        <div className="">
          <span className="text-white text-2xl font-bold ">Shortly</span>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 pr-80">
          <div>
            <h2 className="block font-bold text-xl text-white pb-6">
              Features
            </h2>
            <span className="block text-gray-400 pb-2">Link Shortening</span>
            <span className="block text-gray-400 pb-2">Branded Links</span>
            <span className="block text-gray-400 ">Analytics</span>
          </div>
          <div>
            <h2 className="block font-bold text-xl text-white pb-6">
              Resources
            </h2>
            <span className="block text-gray-400 pb-2">Blog</span>
            <span className="block text-gray-400 pb-2">Developers</span>
            <span className="block text-gray-400 ">Support</span>
          </div>
          <div>
            <h2 className="block font-bold text-xl text-white pr-20 pb-6">
              Company
            </h2>
            <span className="block text-gray-400 pb-2">About</span>
            <span className="block text-gray-400 pb-2">Our Team</span>
            <span className="block text-gray-400 pb-2 ">Careers</span>
            <span className="block text-gray-400 ">Contact</span>
          </div>
          <div>
            <Image src={fb} className=""></Image>

            <Image src={twitter} className=""></Image>
            <Image src={pinterest} className=""></Image>
            <Image src={ig} className=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
