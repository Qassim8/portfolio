const HeroSection = () => {
  return (
    <section id="home" className="md:h-[85vh] py-5 flex items-center">
      <div
        data-aos="fade-up"
        className="container relative my-auto flex flex-col md:flex-row items-center gap-20 text-center md:text-start"
      >
        <div className="text-body text-[20px]">
          Salam(); I'm
          <h2 className="text-main text-[27px] md:text-[35px] font-bold">
            Mohammed Elgasim.
          </h2>
          <p className="text-slate-600 text-[30px] md:text-[40px] font-semibold">
            I design & develop software.
          </p>
          <p className="text-body text-[12px] md:text-[15px]">
            Building modern, scalable web applications with clean, maintainable
            code and meaningful user experiences — transforming ideas into
            reliable digital solutions that make a real impact.
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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Qassim8"
              className="flex justify-center items-center gap-3 text-sm md:text-md px-4 md:w-1/4 p-2 text-body bg-main rounded-md duration-300 hover:!text-white hover:bg-[#205e8f]"
            >
              <i className="bi bi-github text-lg"></i>
              <span>Github</span>
            </a>
          </div>
        </div>
        <div className="order-first md:order-last w-[250px] md:w-[350px] h-full relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:border-2 before:border-[#4aacf2] before:rounded-full before:-z-10">
          <img
            src={require("../images/avatar.png")}
            alt="avatar"
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
