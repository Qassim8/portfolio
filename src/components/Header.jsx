import { useEffect, useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import { IoBriefcase } from "react-icons/io5";

const Header = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 px-2 md:px-4 py-4">
      <nav
        className={`container mx-auto 
        rounded-2xl
        transition-all duration-500
        ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-lg border border-white/20"
            : "bg-transparent"
        }
        `}
      >
        <div className="flex justify-between items-center px-1 md:px-6 py-4">
          {/* Logo */}

          <a href="#home" className="text-2xl font-bold text-main">
            {"<MQ />"}
          </a>

          {/* Desktop Menu */}

          <ul className="hidden md:flex items-center md:gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="
                  relative
                  text-slate-700
                  font-medium
                  hover:text-main
                  duration-300
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-main
                  after:duration-300
                  hover:after:w-full
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Button */}

          <a
            href="#contact"
            className="
            hidden
            md:flex
            justify-center
            items-center
            gap-2
            px-6
            py-3
            rounded-xl
            bg-main
            text-white
            font-medium
            hover:scale-105
            hover:shadow-lg
            duration-300
            "
          >
            <span>Hire Me</span>
            <IoBriefcase />
          </a>

          {/* Mobile Button */}

          <button className="md:hidden text-3xl" onClick={() => setShow(!show)}>
            {show ? <BsX /> : <BsList />}
          </button>
        </div>

        {/* Mobile Menu */}

        <div
          className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-500
          ${show ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <ul className="px-1 md:px-6 pb-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setShow(false)}
                  className="
                  block
                  p-4
                  rounded-xl
                  text-slate-700
                  hover:bg-blue-50
                  hover:text-main
                  duration-300
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}

            <a
              href="#contact"
              className="
              flex
              justify-center
              items-center
              gap-2
              text-center
              py-2
              md:py-3
              rounded-xl
              bg-main
              text-white
              "
            >
              <span>Hire Me</span>
              <IoBriefcase />
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
