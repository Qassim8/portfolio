import React from "react";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <footer
      className="
      relative
      overflow-hidden
      py-10
      mt-24
      border-t
      border-slate-200
      bg-white
      "
      style={{
        boxShadow: "0px -10px 30px rgba(15,23,42,.03)",
      }}
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-96
        h-40
        rounded-full
        bg-blue-100/30
        blur-3xl
        "
      />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center gap-5">
          {/* Logo */}

          <h2 className="font-bold text-2xl text-body">
            {"<"}
            <span className="text-main">MQ</span>
            {" />"}
          </h2>

          {/* text */}

          <p className="text-slate-500 text-center max-w-lg">
            Building modern web experiences with clean code, scalable
            architecture, and meaningful user experiences.
          </p>

          {/* Social */}

          <div className="flex gap-4">
            {[
              {
                icon: <BsGithub />,
                link: "https://github.com/Qassim8",
              },
              {
                icon: <BsLinkedin />,
                link: "#",
              },
              {
                icon: <BsWhatsapp />,
                link: "https://wa.me/201501248489",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                w-11
                h-11
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                flex
                items-center
                justify-center
                text-main
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-300
                "
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* copyright */}

          <div className="mt-5 text-sm text-slate-500 text-center">
            © 2023
            <span className="font-semibold text-main">Mohammed Qassim</span>
            {" • "}
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
