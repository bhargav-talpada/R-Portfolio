import React from "react";
import profile from "../assets/c2.jpg"
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-[1200px] mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
        </div>

        <div className="border my-10 py-6 relative border-[#0fe2b1db] shadow-md shadow-[#0fe2b1db] max-w-[1000px] px-5 mx-auto rounded-xl">
          <span className="flex items-center">
            <img src={profile} alt="bhargav" className="h-12 rounded-full" />
            <p className="py-2 -mt-2 border shadow-xl rounded-3xl text-base font-semibold border-gray-500 px-3 ms-2 flex items-center gap-1.5">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-green-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
              </svg> Available for work
            </p>
          </span>
          
          <div className="grid gap-y-7 750:flex items-center">
            <div className="750:px-7 400:mr-7 750:mr-0 max-w-[490px]">
              <p className="text-lg font-semibold py-3">Drop me a line or say 👋 on social networks</p>
              <p className="text-gray-500 text-base font-semibold">
                Whether you're a web developer in need of support or an early-stage company looking to level up your development, 
                I'd love to talk about your project. If you want to develop your website, let's collaborate and bring your vision to life 💜
              </p>
            </div>
            
            <span className="750:mx-4">
              <p className="text-gray-400 font-semibold">bhargavtalpada2004@gmail.com</p>
              <div className="flex text-2xl text-gray-400 gap-3 py-4">
                <a href="https://www.linkedin.com/in/bhargav-talpada/" target="_blank">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>
                </a>
                <a href="mailto:bhargavtalpada2004@gmail.com" target="_blank">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
                  </svg>
                </a>
                <a href="https://github.com/bhargav-talpada" target="_blank">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12"></path>
                  </svg>
                </a>
                <a href="/Bhargav.pdf" download={true}>
                  <BsFillPersonLinesFill size={25} />
                </a>
                <a href="https://leetcode.com/u/bhargav-talpada/" target="_blank">
                  <SiLeetcode />
                </a>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
