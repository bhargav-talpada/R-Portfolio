import React from "react";
import swiggyClone from "../assets/portfolio/swiggy.png";
import youtubeClone from "../assets/portfolio/youtube.png";
import netflixPage from "../assets/portfolio/netflix.png";
import htmlCssPortfolio from "../assets/portfolio/portfolio.png";
import htmlCssProjects from "../assets/portfolio/html-css-projects.png";
import jsProjects from "../assets/portfolio/js-projects.png";
import github from "../assets/github.png";
import { FiExternalLink } from "react-icons/fi";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "Swiggy Clone",
      tags: [
        {
          name: "ReactJS,",
        },
        {
          name: "API,",
        },
        {
          name: "Tailwind",
        },
      ],
      src: swiggyClone,
      source_code_link: "https://github.com/bhargav-talpada/My-Swiggy.git", 
    },
    {
      id: 2,
      name: "Youtube Clone",
      tags: [
        {
          name: "ReactJS,",
        },
        {
          name: "API,",
        },
        {
          name: "Tailwind",
        },
      ],
      src: youtubeClone,
      source_code_link: "https://github.com/bhargav-talpada/My-Youtube.git",
      live_link: "https://my-youtube-lac.vercel.app/",
    },
    {
      id: 3,
      name: "Netflix Clone",
      tags: [
        {
          name: "ReactJS,",
          color: "blue-text-gradient",
        },
        {
          name: "API,",
        },
        {
          name: "Tailwind,",
        },
        {
          name: "Firebase",
        },
      ],
      src: netflixPage,
      source_code_link: "https://github.com/bhargav-talpada/My-Netflix.git",
    },
    {
      id: 4,
      name: "HTML-CSS-Portfolio",
      tags: [
        {
          name: "HTML,",
        },
        {
          name: "CSS,",
        },
        {
          name: "JavaScript",
        },
      ],
      src: htmlCssPortfolio,
      source_code_link: "https://github.com/bhargav-talpada/My-Portfolio.git",
      live_link: "https://bhargavtalpada.netlify.app/",
    },
    {
      id: 5,
      name: "JavaScript-Projects",
      tags: [
        {
          name: "JavaScript",
        },
      ],
      src: jsProjects,
      source_code_link: "https://github.com/bhargav-talpada/JavaScript-Projects.git",
      live_link: "https://bhargav-js-projects.netlify.app/",
    },
    {
      id: 7,
      name: "HTML-CSS-Projects",
      tags: [
        {
          name: "HTML,",
        },
        {
          name: "CSS",
        },
      ],
      src: htmlCssProjects,
      source_code_link: "https://github.com/bhargav-talpada/HTML-CSS-Project.git",
      live_link: "https://bhargav-html-css.netlify.app/", 
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-[1200px] p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, tags, source_code_link, live_link }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg  duration-300 hover:scale-105"
            >
              <img src={src} alt="" className="rounded-md" />
              <div className="px-4 mt-5 flex flex-col">
                <h2 className="font-bold text-lg">{name}</h2>
              
                <div className="mt-2 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <p
                      key={`${name}-${tag.name}`}
                      className='text-sm font-extralight'
                    >
                      {tag.name}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105">
                  <FiExternalLink className="w-1/3 h-1/3" onClick={() => window.open(live_link)} />
                </button>
                <button className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105">
                  <img src={github} className="w-1/3 h-1/3 object-contain" onClick={() => window.open(source_code_link)} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
