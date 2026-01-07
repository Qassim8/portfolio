import htmlIcon from "../images/html-5.png";
import cssIcon from "../images/css-3.png";
import jsIcon from "../images/js.png";
import tailwindIcon from "../images/tailwindcss.png";
import bootstrapIcon from "../images/bootstrap.png";
import physicsIcon from "../images/physics.png";
import nextIcon from "../images/next-js.png";
import SectionHeader from "./SectionHeader";
import odoo from "../images/odoo.png";
import python from "../images/python.png";

const SkillsSection = () => {
  const skills = [
    { img: htmlIcon, title: "HTML" },
    { img: cssIcon, title: "CSS" },
    { img: jsIcon, title: "JavaScript" },
    { img: bootstrapIcon, title: "Bootstrap" },
    { img: tailwindIcon, title: "Tailwind" },
    { img: physicsIcon, title: "React" },
    { img: nextIcon, title: "Next" },
    { img: python, title: "Python" },
    { img: odoo, title: "Odoo" },
  ];

  return (
    <div id="skills" className="py-16">
      <div className="container">
        <SectionHeader
          title="mySkills"
          desc="here i show you most of the technical and basic skills that i have"
        />
        <div
          data-aos="zoom-in"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"
        >
          {skills.map(({ img, title }, idx) => (
            <div
              className="p-8 bg-blue-100 border border-blue-400 rounded-md flex flex-col justify-center items-center gap-5 duration-300 hover:scale-105 hover:bg-blue-400"
              key={idx}
            >
              <div
                className={`${
                  idx === 11 ? "w-72 h-72" : "w-[80px] h-[80px]"
                } flex justify-center items-center`}
              >
                <img src={img} alt="icon" className="min-w-full" />
              </div>
              <h2 className="font-semibold text-lg">{title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SkillsSection;
