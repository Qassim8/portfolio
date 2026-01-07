import React from "react";
import SectionHeader from "./SectionHeader";

function AboutMe() {
  return (
    <section id="about" className="py-16 text-body bg-slate-50">
      <div
        className="container mx-auto text-center md:text-start"
        data-aos="fade-right"
      >
        <SectionHeader
          title="About Me"
          desc="a words about me and what i'm interest on it"
        />
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          I'm <span className="font-semibold text-body">Mohammed Elgasim</span>,
          Software Developer specializing in building modern, high-performance
          web applications and transforming creative designs into scalable,
          interactive user experiences. Experienced in
          <span className=" text-amber-600 font-bold"> HTML</span>,
          <span className="text-blue-500 font-bold"> CSS</span>,
          <span className="text-amber-300 font-bold"> JavaScript</span>,
          <span className="text-cyan-500 font-bold"> React</span>,
          <span className="text-sky-400 font-bold"> Tailwind CSS</span>,
          <span className="text-violet-600 font-bold"> Bootstrap</span>,
          <span className="text-slate-600 font-bold"> Next</span>,
          <span className="text-blue-900 font-bold"> Pyt</span>
          <span className="text-yellow-300 font-bold">hon</span> and
          <span className="text-fuchsia-900 font-bold"> Odoo</span> development,
          with a strong focus on clean architecture, performance optimization,
          and crafting intuitive, user-friendly interfaces where attention to
          detail makes a real impact
        </p>
        <p className="text-lg mb-6">
          I believe that coding is not just about writing functions, it's about
          solving real-world problems and improving people's lives through
          technology.
        </p>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-main mb-3">Interests</h3>
          <ul className="list-disc list-inside text-base space-y-2 text-slate-500">
            <li>Developing systems using Odoo ERP</li>
            <li>UI/UX design and user experience optimization</li>
            <li>Integrating AI into frontend to enhance user interaction</li>
            <li>Self-learning and knowledge sharing</li>
            <li>Exploring startup ideas for the Sudanese market</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
