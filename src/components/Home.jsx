import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-20 sm:mt-4">
          <h2 className="mt-5 sm:mt-0 text-2xl sm:text-4xl font-bold text-white">
            I'm a Bhargav Talpada
          </h2>
          <p class="bg-gradient-to-r from-blue-300 via-blue-500 to-white bg-clip-text text-transparent text-[65px] max-[600px]:text-[40px] max-[450px]:text-[30px] max-[380px]:text-[25px] font-bold">Web Developer</p>
          <p className="text-gray-500 py-4 max-w-md">
          I’m a front-end developer with solid foundation in creating and improving web applications using React.js and Tailwind CSS.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <img
            src={HeroImage}
            alt="my profile"
            className="max-w-[300px] max-h-[400px] md:max-w-[400px] md:max-h-[500px] h-full w-full rounded-[30px] object-cover border-[3px]  border-[#64ffda66] hover:border-cyan-400 shadowSpread transition-all duration-300 rotate-[4deg] hover:rotate-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
