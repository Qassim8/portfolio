import htmlIcon from "../images/html-5.png";
import cssIcon from "../images/css-3.png";
import jsIcon from "../images/js.png";
import tailwindIcon from "../images/tailwindcss.png";
import bootstrapIcon from "../images/bootstrap.png";
import sassIcon from "../images/sass.png";
import physicsIcon from "../images/physics.png";
import reduxIcon from "../images/redux.png";
import nextIcon from "../images/next-js.png";
import SectionHeader from "./SectionHeader";

const SkillsSection = () => {
  const icons = [
    htmlIcon,
    cssIcon,
    jsIcon,
    tailwindIcon,
    bootstrapIcon,
    sassIcon,
    physicsIcon,
    reduxIcon,
    nextIcon,
  ];


  return (
    <div className="py-20 container mx-auto">
      <SectionHeader
        title="mySkills"
        desc="here i show you most of the technical and basic skills that i have"
      />
      <div data-aos="zoom-out" className="grid md:grid-cols-3 gap-5">
        {icons.map((icon, idx) => (
          <div
            className="p-8 bg-blue-100 border border-blue-400 rounded-md flex justify-center items-center duration-300 hover:scale-105 hover:bg-blue-900"
            key={idx}
          >
            <div className="w-[80px] h-[80px] flex justify-center items-center">
              <img src={icon} alt="icon" className="max-w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SkillsSection;
