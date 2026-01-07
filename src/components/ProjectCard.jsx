const ProjectCard = ({ myProject }) => {
  return (
    <div className="p-3 border border-[#4aacf2] rounded-md duration-300 hover:bg-[#205e8f] hover:rotate-1 group flex flex-col">
      <div className="w-full h-[200px] overflow-hidden">
        <img
          src={myProject.image}
          alt={myProject.title}
          className="w-full min-h-full"
          loading="lazy"
        />
      </div>
      <div className="mt-5 mb-2 flex justify-between items-center border-t-2 border-t-slate-500">
        <h3 className="font-bold text-lg my-2 text-main">{myProject.title}</h3>
      </div>
      <p className="text-slate-500 mb-5 group-hover:text-white">
        {myProject.description}
      </p>
      {myProject.link && (
        <a
          target="_blank"
          href={myProject.link}
          className="block text-center w-full py-2 text-white bg-main rounded-md relative mt-auto"
        >
          Visit
        </a>
      )}
    </div>
  );
};
export default ProjectCard;
