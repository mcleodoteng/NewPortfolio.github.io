import PropTypes from "prop-types";
const ProjectsItem = ({
  img,
  projectName,
  lang1,
  lang2,
  lang3,
  link1,
  link2,
}) => {
  return (
    <div className="w-full mx-auto mt-12 group h-auto">
      <div className="group relative">
        <img src={img} alt="my-selfimage" className=" mx-auto" />
        <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#00000079] opacity-0 group-hover:h-full group-hover:opacity-100 duration-300">
          <a href={link1}>
            <h2 className="text-white font-face-gm text-[20px] tracking-widest underline underline-offset-[10px] decoration-[#45e92c]">
              VIEW PROJECT
            </h2>
          </a>
          <a href={link2}>
            <h2 className="text-white font-face-gm text-[20px] tracking-widest underline underline-offset-[10px] decoration-[#45e92c] mt-8">
              VIEW CODE
            </h2>
          </a>
        </div>
      </div>
      <h1 className="text-[#001b5e] font-face-gm text-[25px] mt-5">
        {projectName}
      </h1>
      <div className="flex gap-3 mt-1">
        <h2 className="text-[#001b5e] font-face-gm text-[23px] underline underline-offset-[10px] decoration-[#45e92c]">
          {lang1}
        </h2>
        <h2 className="text-[#001b5e] font-face-gm text-[23px] underline underline-offset-[10px] decoration-[#45e92c]">
          {lang2}
        </h2>
        <h2 className="text-[#001b5e] font-face-gm text-[23px] underline underline-offset-[10px] decoration-[#45e92c]">
          {lang3}
        </h2>
      </div>

      <div className="flex gap-5 mt-6">
        <a
          href={link1}
          className="text-[#001b5e] font-face-gm text-[20px] tracking-widest underline underline-offset-[12px] decoration-[#45e92c]"
        >
          VIEW PROJECT
        </a>
        <a
          href={link2}
          className="text-[#001b5e] font-face-gm text-[20px] tracking-widest underline underline-offset-[12px] decoration-[#45e92c]"
        >
          VIEW CODE
        </a>
      </div>
    </div>
  );
};

export default ProjectsItem;

ProjectsItem.propTypes = {
  img: PropTypes.any,
  projectName: PropTypes.any,
  link1: PropTypes.any,
  link2: PropTypes.any,
  lang1: PropTypes.any,
  lang2: PropTypes.any,
  lang3: PropTypes.any,
};
