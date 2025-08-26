import React from 'react'

function AboutMe() {
  return (
    <section data-aos="fade-right" className="py-16 md:py-24 text-body">
      <div className="container mx-auto text-center md:text-start">
        <h2 className="text-3xl md:text-4xl font-bold text-main mb-4">
          About Me
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          I'm <span className="font-semibold text-body">Mohammed Elgasim</span>
          , a web developer I specialize in transforming creative designs into
          interactive websites using technologies like HTML, CSS, JavaScript,
          React, Tailwind CSS, and Next.js. I'm passionate about building clean
          and user-friendly interfaces with attention to the small details that
          truly make a difference.
        </p>
        <p className="text-lg mb-6">
          I believe that coding is not just about writing functions, it's about
          solving real-world problems and improving people's lives through
          technology.
        </p>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-main mb-3">
            Interests
          </h3>
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

export default AboutMe