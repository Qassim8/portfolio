import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col md:flex-row items-center gap-20 text-center md:text-start py-16 md:my-32"
    >
      <div className="text-body text-[20px]">
        Salam(); I'm
        <h2 className="text-main text-[35px] font-bold">Mohammed Elgasim.</h2>
        <p className="text-body text-[40px]">I design & code for web.</p>
        <p className="text-body">
          A Frontend Developer with a passion for crafting stunning and
          responsive web applications. Proficient in HTML, CSS, and JavaScript,
          as well as frameworks and libraries like Bootstrap, Tailwindcss,
          React, SASS, Nextjs.
        </p>
        <div className="flex justify-center md:justify-start gap-4 mt-5">
          <a
            download
            rel="noopener noreferrer"
            href="https://drive.google.com/uc?export=download&id=1zO4rS1mCFEhhj5BxtMU6bWmvEfsgoLgP"
            className="flex justify-center items-center gap-3 text-sm md:text-md px-4 md:w-1/4 p-2 text-main border border-[#4aacf2] rounded-md duration-300 hover:!text-white hover:bg-[#4aacf2]"
          >
            <i className="bi bi-download text-lg"></i>
            <span>Dwonload CV</span>
          </a>
          <Link
            target="_blank"
            to="https://github.com/Qassim8"
            className="flex justify-center items-center gap-3 text-sm md:text-md px-4 md:w-1/4 p-2 text-body bg-main rounded-md duration-300 hover:!text-white hover:bg-[#205e8f]"
          >
            <i className="bi bi-github"></i>
            <span>Github</span>
          </Link>
        </div>
      </div>
      <div className="order-first md:order-last w-[250px] md:w-fit h-full relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:border before:border-[#4aacf2] before:rounded-full before:-z-10">
        <img
          src={require("../images/avatar.png")}
          alt="avatar"
          className="max-w-full"
        />
      </div>
    </div>
  );
};
export default HeroSection;
