import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";

import Link from "next/link";
import Slogo from "../public/logos/Slogo3.png";
import Image from "next/image";
import { motion } from "framer-motion";

// import {
//   Link,
//   Button,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scrollSpy,
//   scroller,
// } from 'react-scroll'

function Navbar() {
  const [top, setTop] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 14 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <>
      <nav className=""></nav>
    </>
  );
}

export default Navbar;
