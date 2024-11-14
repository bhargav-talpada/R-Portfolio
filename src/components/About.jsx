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

        <p className="text-xl md:mt-20">
          As a junior web developer, I am enthusiastic about utilizing my technical skills and passion for creating dynamic, user-friendly web applications. With a strong foundation in ReactJS, JavaScript, and Tailwind CSS, I am committed to developing responsive and efficient solutions. My skill set extends to backend technologies like NodeJS and database management with MongoDB and SQL, allowing me to contribute effectively to full-stack development. I am eager to continuously learn and adapt to the latest web development frameworks and technologies, ensuring I stay aligned with industry standards and innovations.
        </p>
      </div>
    </div>
  );
};

export default About;
