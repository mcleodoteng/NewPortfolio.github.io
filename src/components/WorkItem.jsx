import PropTypes from "prop-types";
const WorkItem = ({ year, title, duration, company, details }) => {
  return (
    <div className="mt-3">
      <ol className="flex flex-col relative md:flex-row border-l border-stone-200">
        <li className="mb-10 ml-4 ">
          <div className="absolute w-3 h-3 rounded-full bg-stone-200 mt-1.5 -left-1.5 border-white" />{" "}
          {/* represents the dotted circles */}
          <p className="flex flex-wrap gap-4 flex-row item-center justify-start text-sm md:text-lg">
            <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
              {year}
            </span>
            <span className="text-lg font-semibold text-[#001b5e]">
              {title}
            </span>
            <span className="my-1 text-lg font-normal leading-none text-stone-400">
              {duration}
            </span>
          </p>
          <p className="text-lg font-semibold text-[#001b5e] mt-2">{company}</p>
          <p className="my-2 text-base font-normal text-stone-400">
            {details[0]}
          </p>
          <p className="my-2 text-base font-normal text-stone-400">
            {details[1]}
          </p>
          <p className="my-2 text-base font-normal text-stone-400">
            {details[2]}
          </p>
          <p className="my-2 text-base font-normal text-stone-400">
            {details[3]}
          </p>
          <p className="my-2 text-base font-normal text-stone-400">
            {details[4]}
          </p>
        </li>
      </ol>
    </div>
  );
};

export default WorkItem;

WorkItem.propTypes = {
  year: PropTypes.any,
  title: PropTypes.any,
  duration: PropTypes.any,
  company: PropTypes.any,
  details: PropTypes.any,
};
