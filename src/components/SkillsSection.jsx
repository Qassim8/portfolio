import SectionHeader from "./SectionHeader";

const SkillsSection = () => {
  const skills = [
    { img: "/images/html-5.png", title: "HTML" },
    { img: "/images/css-3.png", title: "CSS" },
    { img: "/images/js.png", title: "JavaScript" },
    { img: "/images/bootstrap.png", title: "Bootstrap" },
    { img: "/images/tailwindcss.png", title: "Tailwind" },
    { img: "/images/physics.png", title: "React" },
    { img: "/images/react-query.png", title: "React-Query" },
    { img: "/images/zustand.png", title: "Zustand" },
    { img: "/images/next-js.png", title: "Next.js" },
    { img: "/images/python.png", title: "Python" },
    { img: "/images/odoo.png", title: "Odoo" },
  ];

  return (
    <section id="skills" className="py-24 ">
      <div className="container mx-auto">
        <SectionHeader
          title="Skills"
          desc="Technologies and tools I use to build modern applications"
        />

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          gap-3
          md:gap-6
          "
        >
          {skills.map(({ img, title }, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              data-aos-duration="700"
              data-aos-once="true"
              className="
    group
    relative
    overflow-hidden
    rounded-xl
    bg-white
    p-2
    flex
    flex-col
    items-center
    justify-center
    gap-3
    border
    border-slate-200
    transition-all
    duration-500
    hover:-translate-y-3
    hover:border-blue-200
    before:absolute
    before:inset-0
    before:rounded-xl
    before:p-[1px]
    before:bg-gradient-to-br
    before:from-blue-400/0
    before:to-cyan-400/0
    hover:before:from-blue-400
    hover:before:to-cyan-400
    before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
    before:[mask-composite:xor]
    before:pointer-events-none
  "
            >
              {/* Soft glow */}

              <div
                className="
      absolute
      w-32
      h-32
      rounded-full
      bg-blue-100/0
      blur-3xl
      transition-all
      duration-700
      group-hover:bg-blue-300/30
    "
              />

              {/* Icon Container */}

              <div
                className="
      relative
      z-10
      w-[90px]
      h-[90px]
      rounded-2xl
      bg-slate-50
      flex
      items-center
      justify-center
      transition-all
      duration-500
      group-hover:scale-110
      group-hover:rotate-6
    "
              >
                <img
                  src={img}
                  alt={title}
                  className="
        w-[55px]
        h-[55px]
        object-contain
      "
                />
              </div>

              {/* Title */}

              <h2
                className="
      relative
      z-10
      text-lg
      font-semibold
      text-slate-700
      transition-all
      duration-300
      group-hover:text-main
    "
              >
                {title}
              </h2>

              {/* bottom line */}

              <div
                className="
      h-[3px]
      w-0
      rounded-full
      bg-gradient-to-r
      from-blue-500
      to-cyan-400
      transition-all
      duration-500
      group-hover:w-16
    "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
