import React from "react";
import SectionHeader from "./SectionHeader";

function AboutMe() {
  const interests = [
    "Frontend Architecture",
    "Performance Optimization",
    "Node.js Fundamentals",
    "Cloud Engineering",
    "ERP Systems",
    "Continuous Learning",
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto">
        <SectionHeader
          title="About Me"
          desc="A few words about me and my professional interests"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* About Text */}

          <div data-aos="fade-top">
            <h3 className="text-3xl font-bold text-body mb-6">
              Building modern web experiences with purpose.
            </h3>

            <p className="text-slate-600 leading-6">
              I'm{" "}
              <span className="font-semibold text-main">Mohammed Qassim</span>,
              a Frontend Developer focused on creating modern, scalable, and
              responsive web applications with clean architecture and
              user-centered design.
            </p>

            <p className="text-slate-600 leading-6 my-3">
              I enjoy transforming ideas into meaningful digital experiences
              while maintaining performance, maintainability, and attention to
              detail.
            </p>

            <p className="text-slate-600 leading-6">
              My goal is not only to write code, but also to solve real-world
              problems and build products that create value and improve user
              experiences.
            </p>

            {/* Quick stats */}

            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="p-3 text-center border-r border-r-slate-300">
                <h2 className="text-main font-bold text-3xl">10+</h2>
                <p className="text-sm text-slate-500">Projects</p>
              </div>

              <div className="p-3 text-center border-r border-r-slate-300">
                <h2 className="text-main font-bold text-3xl">2+</h2>
                <p className="text-sm text-slate-500">Experience</p>
              </div>

              <div className="p-3 text-center">
                <h2 className="text-main font-bold text-3xl">∞</h2>
                <p className="text-sm text-slate-500">Learning</p>
              </div>
            </div>
          </div>

          {/* Interests */}

          <div
            data-aos="fade-top"
            className="
  relative
  overflow-hidden
  rounded-[30px]
  bg-white
  p-4
  md:p-8
  border
  border-slate-200
  "
            style={{
              boxShadow:
                "0px 10px 30px rgba(15,23,42,0.04), 0px 1px 2px rgba(15,23,42,0.05)",
            }}
          >
            {/* Background glow */}

            <div
              className="
    absolute
    top-0
    right-0
    w-40
    h-40
    rounded-full
    bg-blue-100/40
    blur-3xl
    "
            />

            <h3 className="relative text-2xl font-bold mb-8 text-body">
              Interests & Focus Areas
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {interests.map((item, idx) => (
                <div
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="
        group
        relative
        overflow-hidden
        md:p-5
        p-2
        rounded-2xl
        border
        border-slate-100
        bg-slate-50/70
        backdrop-blur-md
        hover:-translate-y-2
        hover:border-blue-200
        transition-all
        duration-500
        "
                  style={{
                    boxShadow: "0px 6px 15px rgba(15,23,42,0.03)",
                  }}
                >
                  {/* small animated dot */}

                  <div
                    className="
          absolute
          top-4
          right-4
          w-2
          h-2
          rounded-full
          bg-main
          transition-all
          duration-500
          group-hover:scale-[3]
          group-hover:opacity-20
          "
                  />

                  <div className="relative flex items-center gap-3">
                    <span
                      className="
            text-slate-700
            text-xs
            md:text-base
            font-medium
            group-hover:text-main
            transition-colors
            duration-300
            "
                    >
                      {item}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
