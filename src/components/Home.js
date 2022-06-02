import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-[#ffde59]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Serref Jaguraga
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <Link to="about" spy={true} smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4ab5bd] hover:border-[#4ab5bd]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
