import ReactJsCirtificate from '../assets/certificate/react_basic certificate.pdf'
import namasteJavascript from '../assets/certificate/Namaste-JS-Certificate.webp'

const Certificate = () => {

    const certification = [
        {
          title: "React Developer Exam by Hackerank",
          link: ReactJsCirtificate,
        },
        // {
        //   title: "Training in React JS by TOPS Technology",
        //   link: ReactJsTraining,
        // },
        {
          title: "Javascript Course by Akshay Saini",
          link: namasteJavascript,
        },
      ];

  return (
    <div name="certificates" className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-20 md:pt-0'>
        <div className="flex flex-col p-4 justify-center max-w-[1200px] mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Certifications
                </p>
            </div>
            <div className="my-5 md:my-10 grid gap-5">
                {certification.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        className="bg-[#2a2934] border border-transparent transition-all duration-150 hover:border hover:shadow-sm hover:shadow-cyan-400 gap-3 hover:border-cyan-400 rounded py-3 px-5 flex justify-between items-center cursor-pointer "
                    >
                        <span className="text-sm md:text-base lg:text-xl">
                            {item.title}
                        </span>
                        <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            View
                        </button>
                    </a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Certificate