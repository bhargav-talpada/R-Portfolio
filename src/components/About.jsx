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
          I am a junior web developer passionate about creating dynamic and user-friendly web applications. With expertise in <b className="text-gray-300"> ReactJS, JavaScript, Tailwind CSS, Redux </b>, and <b className="text-gray-300"> NodeJS </b>, I specialize in building responsive and scalable solutions. I am proficient in <b className="text-gray-300"> ExpressJS </b> for backend development, <b className="text-gray-300"> MongoDB </b> and <b className="text-gray-300"> SQL </b> for database management, and tools like <b className="text-gray-300"> Postman </b>, <b className="text-gray-300"> GitHub </b> for efficient development workflows. I focus on delivering seamless user experiences while staying updated with the latest web technologies and industry trends. My goal is to develop innovative solutions that solve real-world problems effectively.
        </p>
        {/* <p class="text-gray-800 leading-relaxed">
  I am a <span class="font-semibold text-blue-600">junior web developer</span> passionate about creating 
  <span class="font-semibold text-green-500">dynamic</span> and 
  <span class="font-semibold text-purple-500">user-friendly</span> web applications. With expertise in 
  <span class="text-blue-400 font-bold">ReactJS</span>, <span class="text-yellow-400 font-bold">JavaScript</span>, 
  <span class="text-teal-400 font-bold">Tailwind CSS</span>, <span class="text-pink-400 font-bold">Redux</span>, 
  and <span class="text-green-600 font-bold">NodeJS</span>, I specialize in building 
  <span class="font-semibold text-blue-500">responsive</span> and 
  <span class="font-semibold text-red-500">scalable</span> solutions.  
  I am proficient in <span class="text-indigo-400 font-bold">ExpressJS</span> for backend development, 
  <span class="text-green-500 font-bold">MongoDB</span> and <span class="text-blue-700 font-bold">SQL</span> for 
  database management, and tools like <span class="text-orange-500 font-bold">Postman</span>, 
  <span class="text-gray-700 font-bold">GitHub</span>, and <span class="text-red-600 font-bold">Firebase</span> 
  for efficient development workflows. I focus on delivering 
  <span class="font-semibold text-green-500">seamless user experiences</span> while staying updated with the latest 
  <span class="text-purple-500 font-bold">web technologies</span> and <span class="font-bold text-indigo-500">industry trends</span>.  
  My goal is to develop <span class="font-bold text-red-500">innovative solutions</span> that solve 
  <span class="font-semibold text-green-600">real-world problems</span> effectively.
</p> */}

      </div>
    </div>
  );
};

export default About;
