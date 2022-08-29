import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Intro from "./Intro";
import Stats from "./Stats";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Shortly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Navbar />
        <Intro />
        <Stats />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
