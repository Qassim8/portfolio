import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30; // غير الرقم حسب ما تحب
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // تنظيف عند إلغاء الكمبوننت
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` md:px-0 sticky top-0 z-40 ${scrolled ? "bg-amber-400" : ""}`}
    >
      <nav
        className={`container mx-auto relative flex justify-between items-center my-5 p-2 ${
          scrolled ? "bg-transparent" : "bg-amber-400/80"
        } rounded-md`}
      >
        <h1 className="block md:hidden font-bold text-[25px] text-body py-2">
          {"<MQ />"}
        </h1>
        <div className="md:w-full flex flex-col">
          <button className="block md:hidden" onClick={() => setShow(!show)}>
            <i className="bi bi-list text-lg text-blute-800"></i>
          </button>
          <ul
            className={`${
              show ? "flex" : "hidden"
            } absolute md:relative top-full bg-amber-500 md:bg-transparent rounded-md p-2 md:p-0 end-0 w-full font-medium md:flex flex-col mt-2 md:flex-row md:justify-between md:items-center gap-2 md:gap-0 md:mt-0 z-50`}
          >
            <li>
              <NavLink
                to="/"
                className="block py-2 px-10 text-white rounded duration-300 md:text-white hover:bg-body"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className="block py-2 px-10 text-white rounded duration-300 md:border-0 hover:bg-body"
              >
                About
              </NavLink>
            </li>
            <h1 className="hidden md:block font-bold text-[25px] text-body py-2">
              {"<MQ />"}
            </h1>
            <li>
              <NavLink
                to="project"
                className="block py-2 px-10 text-white rounded duration-300 md:border-0 hover:bg-body"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 px-10 text-white rounded duration-300 md:border-0 hover:bg-body"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
