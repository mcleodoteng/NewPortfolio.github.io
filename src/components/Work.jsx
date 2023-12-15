import WorkItem from "./WorkItem";
import { data } from "../assets/data.js";
const Work = () => {
  return (
    <div id="work" className="max-w-[1048px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text:4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, index) => (
        <WorkItem
          key={index}
          year={item.year}
          title={item.title}
          company={item.company}
          details={item.details}
          duration={item.duration}
        />
      ))}
      <div></div>
    </div>
  );
};

export default Work;
