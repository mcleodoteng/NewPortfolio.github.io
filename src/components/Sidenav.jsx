import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 z-[99] right-4 md:hidden"
      />
      {nav ? (
        <div>
          <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
            <a>
              <AiOutlineClose
                onClick={handleNav}
                className="top-4 right-4 z-99 absolute "
              />
            </a>
            <a
              onClick={handleNav}
              href="#main"
              className="w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
            >
              <AiOutlineHome size={20} />
              <span className="pl-4">Home</span>
            </a>
            <a
              onClick={handleNav}
              href="#work"
              className="w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
            >
              <GrProjects size={20} />
              <span className="pl-4">Work</span>
            </a>
            <a
              onClick={handleNav}
              href="#projects"
              className="w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
            >
              <AiOutlineProject size={20} />
              <span className="pl-4">Projects</span>
            </a>
            <a
              onClick={handleNav}
              href="#main"
              className="w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
            >
              <BsPerson size={20} />
              <span className="pl-4">Resume</span>
            </a>
            <a
              onClick={handleNav}
              href="#contact"
              className="w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
            >
              <AiOutlineMail size={20} />
              <span className="pl-4">Contact</span>
            </a>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-125 ease-in duration-200"
            href="#main"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-125 ease-in duration-200"
            href="#work"
          >
            <GrProjects size={20} />
          </a>
          <a
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-125 ease-in duration-200"
            href="#projects"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-125 ease-in duration-200"
            href="#main"
          >
            <BsPerson size={20} />
          </a>
          <a
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-125 ease-in duration-200"
            href="#contact"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
