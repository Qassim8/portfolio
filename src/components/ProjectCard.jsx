import { Link } from "react-router-dom";

const ProjectCard = ({myProject}) => {
  return (
    <div className="p-3 border border-[#4aacf2] rounded-md duration-300 hover:bg-[#205e8f] hover:rotate-1 group">
      <div className="w-full h-[250px] overflow-hidden">
        <img
          src={myProject.image}
          alt={myProject.title}
          className="w-full min-h-full"
          loading="lazy"
        />
      </div>
      <div className="my-2 flex justify-between items-center">
        <h3 className="font-bold text-lg my-2 text-main">
          {myProject.title}
        </h3>
      </div>
      <p className="text-slate-500 mt-3 mb-5 group-hover:text-white">{myProject.description}</p>
      {myProject.link && (
        <Link
          target="_blank"
          to={myProject.link}
          className="block text-center w-full mt-5 py-2 text-white bg-main rounded-md"
        >
          Visit
        </Link>
      )}
    </div>
  );
};
export default ProjectCard;
