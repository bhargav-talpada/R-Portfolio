import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const frontend = [
    {
      id: 1,
      title: "HTML",
      borderColor: "1px solid rgb(255, 165, 0)",
    },
    {
      id: 2,
      title: "CSS",
      borderColor: "1px solid rgb(21 , 114, 82)",
    },
    {
      id: 3,
      title: "JavaScript",
      borderColor: "1px solid rgb(255, 255, 0)",
    },
    {
      id: 4,
      title: "React JS",
      borderColor: "1px solid rgb(135, 206, 235)",
    },
    {
      id: 5,
      title: "Tailwind CSS",
      borderColor: "1px solid rgb(56, 178, 172)",
    },
    {
      id: 6,
      title: "Redux Tool Kit",
      borderColor: "1px solid rgb(118, 74, 188)",
    },
    {
      id: 7,
      title: "MUI",
      borderColor: "1px solid rgb(51, 51, 51)",
    },
  ];

  const backend = [
    {
      id: 1,
      title: "Node JS",
      borderColor: "1px solid rgb(51, 153, 51)",
    },
    {
      id: 2,
      title: "Express",
      borderColor: "1px solid rgb(51, 51, 51)",
    },
    {
      id: 3,
      title: "SQL",
      borderColor: "1px solid rgb(77, 179, 61)",
    },
    {
      id: 4,
      title: "MongoDB",
      borderColor: "1px solid rgb(255, 255, 0)",
    },
  ];

  const other = [
    {
      id: 1,
      title: "Github",
      borderColor: "1px solid rgb(255, 255, 255)",
    },
    {
      id: 2,
      title: "Visual Studio Code",
      borderColor: "1px solid rgb(21, 114, 182)",
    },
  ];

  return (
    <div
      name="skill"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-20 md:pt-0"
    >
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Expertises
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5">
          <div className="bg-[#2a2934] rounded mt-10 py-5 px-5">
            <div className="text-xl text-gray-300  py-3 mb-5 font-bold">
              Front-end Development
            </div>
              <div className="flex flex-wrap gap-4">
                {frontend.map(({ id, title, borderColor }) => (
                  <div  key={id} 
                    className="bg-[#14131a] gap-2 cursor-pointer  rounded-[10px] p-2 flex items-center flex-wrap"
                    style={{border:`${borderColor}`,}}
                  >
                    <div className="px-2 text-gray-300">{title}</div>
                  </div>
                ))}
              </div>
          </div>
          <div className="bg-[#2a2934] rounded mt-10 py-5 px-5">
            <div className="text-xl text-gray-300  py-3 mb-5 font-bold">
              Back-end Development
            </div>
              <div className="flex flex-wrap gap-4">
                {backend.map(({ id, title, borderColor }) => (
                  <div  key={id} 
                    className="bg-[#14131a] gap-2 cursor-pointer  rounded-[10px] p-2 flex items-center flex-wrap"
                    style={{border:`${borderColor}`,}}
                  >
                    <div className="px-2 text-gray-300">{title}</div>
                  </div>
                ))}
              </div>
          </div>
          <div className="bg-[#2a2934] rounded mt-10 py-5 px-5">
            <div className="text-xl text-gray-300  py-3 mb-5 font-bold">
              Other
            </div>
              <div className="flex flex-wrap gap-4">
                {other.map(({ id, title, borderColor }) => (
                  <div  key={id} 
                    className="bg-[#14131a] gap-2 cursor-pointer  rounded-[10px] p-2 flex items-center flex-wrap"
                    style={{border:`${borderColor}`,}}
                  >
                    <div className="px-2 text-gray-300">{title}</div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
