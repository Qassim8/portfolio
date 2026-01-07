import { useEffect, useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` md:px-0 sticky top-0 z-50 duration-500 ${
        scrolled ? "bg-main" : ""
      }`}
    >
      <nav
        className={`container mx-auto relative flex justify-between items-center my-5 p-2 ${
          scrolled ? "bg-transparent" : "bg-main"
        } rounded-md`}
      >
        <h1 className="block md:hidden font-bold text-[25px] text-body py-2">
          {"<MQ />"}
        </h1>
        <div className="md:w-full flex flex-col">
          <button className="block md:hidden" onClick={() => setShow(!show)}>
            <i className="bi bi-list font-bold text-2xl text-slate-900"></i>
          </button>
          <ul
            className={`${
              show ? "flex" : "hidden"
            } text-white absolute md:relative top-full bg-main md:bg-transparent rounded-md p-2 md:p-0 end-0 w-full font-medium md:flex flex-col mt-2 md:flex-row md:justify-between md:items-center gap-2 md:gap-0 md:mt-0 z-50`}
          >
            <li>
              <a
                href="#home"
                onClick={() => setShow(false)}
                className="block py-2 px-10 rounded duration-300 md:text-white hover:bg-white hover:text-body"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setShow(false)}
                className="block py-2 px-10 rounded duration-300 md:border-0 hover:bg-body"
              >
                About
              </a>
            </li>
            <h1 className="hidden md:block font-bold text-[25px] text-body py-2">
              {"<MQ />"}
            </h1>
            <li>
              <a
                href="#projects"
                onClick={() => setShow(false)}
                className="block py-2 px-10 rounded duration-300 md:border-0 hover:bg-white hover:text-body"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setShow(false)}
                className="block py-2 px-10 rounded duration-300 md:border-0 hover:bg-body"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
