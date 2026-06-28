import { BsDownload, BsGithub } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center overflow-hidden relative"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-50 via-white to-blue-50" />

      {/* Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 blur-[100px] rounded-full -z-10"></div>

      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-300/20 blur-[120px] rounded-full -z-10"></div>

      <div
        data-aos="fade-up"
        className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16"
      >
        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left">
          <span className="px-4 py-2 rounded-full bg-blue-100 text-main text-sm font-medium">
            Software Developer • React • Next.js
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-body">
            Salam, I'm <span className="text-main block">Mohammed Qassim</span>
          </h1>

          <h2 className="mt-2 text-2xl md:text-4xl font-semibold text-slate-600">
            Building scalable web experiences.
          </h2>

          <p className="mt-6 text-slate-500 leading-6 text-base md:text-lg">
            I build modern and high-performance web applications using React.js,
            Next.js and modern frontend technologies with a strong focus on
            clean architecture, reusable components, and meaningful user
            experiences.
          </p>

          {/* Tech stack */}

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
            {["React", "Next.js", "Tailwind", "TypeScript", "Node Basics"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm text-sm text-slate-700 hover:-translate-y-1 duration-300"
                >
                  {tech}
                </span>
              ),
            )}
          </div>

          {/* Buttons */}

          <div className="flex justify-center md:justify-start gap-5 mt-10">
            <a
              download="Mohammed_Algasim_Software_Developer_CV.pdf"
              href="/cv.pdf"
              className="flex items-center gap-3 px-3 md:px-7 py-2 md:py-4 bg-main text-white rounded-lg md:rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl duration-300"
            >
              <BsDownload />
              Download CV
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Qassim8"
              className="flex items-center gap-3 px-3 md:px-7 py-2 md:py-4 rounded-lg md:rounded-2xl border border-slate-300 bg-white hover:bg-slate-50 hover:scale-105 duration-300"
            >
              <BsGithub />
              Github
            </a>
          </div>
        </div>

        {/* Right Image */}

        <div className="relative">
          {/* Decorative circles */}

          <div className="absolute inset-0 scale-125 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-300/20 blur-3xl"></div>

          <div className="relative w-[280px] md:w-[420px] aspect-square">
            <div className="absolute inset-0 rounded-full border border-blue-300 animate-pulse"></div>

            <div className="absolute inset-4 rounded-full border border-cyan-300"></div>

            <div className="overflow-hidden rounded-full backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl">
              <img
                src="/images/avatar.png"
                alt="avatar"
                className="w-full h-full object-cover hover:scale-105 duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
