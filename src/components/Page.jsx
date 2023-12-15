import Back from "../assets/back.jpg";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
const Page = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={Back}
        alt="image"
      />
      <div className="w-full h-screen top-0 left-0 absolute bg-white/40">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl text-gray-800">
            I&apos;m Mcleod Oteng
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I&apos;m&nbsp;
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "a Frontend Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Coder",
                2000,
                "a Tech Enthusiate",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[250px] w-full">
            <a>
              <FaTwitter size={20} className="cursor-pointer" />
            </a>
            <a>
              <FaFacebook size={20} className="cursor-pointer" />
            </a>
            <a>
              <FaInstagram size={20} className="cursor-pointer" />
            </a>
            <a href="linkedin.com/in/mcleod-oteng-350028222">
              <FaLinkedin size={20} className="cursor-pointer" />
            </a>
            <a>
              <FaGithub size={20} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
