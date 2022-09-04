import boost from "../public/images/bg-boost-desktop.svg";
import mboost from "../public/images/bg-boost-mobile.svg";

function Boost() {
  return (
    <section className="">
      <div className="boost pt-20">
        <h1 className="text-center text-white text-4xl font-bold pb-6">
          Boost your links today
        </h1>
        <div className=" md:pb-6 pb-10 container flex m-auto object-center items-cente">
          <button className="bg-teal-300 hover:bg-teal-500  text-white font-bold lg:py-4 lg:px-12 rounded-full py-2 px-8 center ">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Boost;
