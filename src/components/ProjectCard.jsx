import { IoArrowForward } from "react-icons/io5";

const ProjectCard = ({ myProject }) => {
  return (
    <div
      className="
  group
  overflow-hidden
  rounded-[28px]
  border
  border-slate-200
  bg-white
  hover:-translate-y-2
  duration-500
  transition-all
  flex
  flex-col
  "
      style={{
        boxShadow:
          "0px 12px 30px rgba(15,23,42,.04),0px 2px 6px rgba(15,23,42,.03)",
      }}
    >
      {/* Image */}

      <div className="relative overflow-hidden h-[240px] md:h-[300px]">
        <img
          src={myProject.image}
          alt={myProject.title}
          loading="lazy"
          className="
      w-full
      h-full
      object-cover
      object-top
      transition-transform
      duration-700
      group-hover:scale-110
      "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Small top badge */}

        <div
          className="
      absolute
      top-4
      right-4
      px-3
      py-1
      rounded-full
      text-xs
      text-white
      bg-white/10
      backdrop-blur-md
      border
      border-white/20
      "
        >
          Project
        </div>

        {/* Title */}

        <h3
          className="
      absolute
      bottom-5
      left-5
      text-white
      text-xl
      font-bold
      z-10
      "
        >
          {myProject.title}
        </h3>
      </div>

      {/* Content */}

      <div className="flex flex-col flex-grow p-6">
        <p
          className="
      text-slate-600
      leading-relaxed
      text-sm
      md:text-base
      flex-grow
      line-clamp-4
      "
        >
          {myProject.description}
        </p>

        {myProject.link && (
          <a
            href={myProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
        group/button
        mt-6
        flex
        items-center
        justify-center
        gap-2
        py-3
        rounded-2xl
        bg-main
        text-white
        font-medium
        transition-all
        duration-500
        hover:scale-[1.02]
        "
            style={{
              boxShadow: "0px 8px 20px rgba(59,130,246,.18)",
            }}
          >
            <span>View Project</span>

            <IoArrowForward
              className="
          text-lg
          transition-transform
          duration-500
          group-hover/button:translate-x-1
          "
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
