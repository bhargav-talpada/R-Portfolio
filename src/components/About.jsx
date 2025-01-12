import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white  pt-20 md:pt-0"
    >
      <div className="max-w-[1200px] p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl md:mt-10 leading-relaxed">
          I am a junior web developer passionate about creating dynamic and user-friendly web applications. With expertise in <b className="text-gray-300"> ReactJS, JavaScript, Tailwind CSS, Redux, HTML </b>, and <b className="text-gray-300"> CSS </b>, I specialize in building responsive and scalable solutions. I am proficient in <b className="text-gray-300"> ExpressJS,</b> and <b className="text-gray-300"> NodeJS </b> for backend development, <b className="text-gray-300"> MongoDB </b> and <b className="text-gray-300"> SQL </b> for database management, and tools like <b className="text-gray-300"> Postman </b>, <b className="text-gray-300"> GitHub </b> for efficient development workflows. I focus on delivering seamless user experiences while staying updated with the latest web technologies and industry trends. My goal is to develop innovative solutions that solve real-world problems effectively.
        </p>
      </div>
    </div>
  );
};

export default About;
