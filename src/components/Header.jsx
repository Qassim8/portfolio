import { useEffect, useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import { IoBriefcase } from "react-icons/io5";
import { useI18n } from "../i18n/I18nProvider";
import Toggles from "./Toggles";

const sections = ["home", "about", "skills", "projects", "contact"];

const Header = () => {
  const { t } = useI18n();
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = sections.map((id) => ({
    id,
    name: t(`nav.${id}`),
    link: `#${id}`,
  }));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the nav link of the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 px-2 md:px-4 py-4">
      <nav
        className={`container mx-auto rounded-2xl transition-all duration-500 ${
          scrolled
            ? "bg-canvas/75 backdrop-blur-xl shadow-lg border border-line"
            : "bg-transparent border border-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-1 md:px-4 py-3">
          {/* Logo */}

          <a
            href="#home"
            dir="ltr"
            className="text-2xl font-bold text-main"
            aria-label={t("nav.home")}
          >
            {"<MQ />"}
          </a>

          {/* Desktop Menu */}

          <ul className="hidden md:flex items-center md:gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`relative font-medium hover:text-main duration-300
                  after:absolute after:start-0 after:-bottom-1 after:h-[2px] after:bg-main after:duration-300
                  ${
                    active === item.id
                      ? "text-main after:w-full"
                      : "text-copy after:w-0 hover:after:w-full"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}

          <div className="flex items-center gap-3">
            <Toggles />

            <a
              href="#contact"
              className="hidden md:flex justify-center items-center gap-2 px-6 py-2.5 rounded-xl bg-brand text-white font-medium hover:scale-105 hover:shadow-lg duration-300"
            >
              <span>{t("nav.hire")}</span>
              <IoBriefcase />
            </a>

            <button
              type="button"
              className="md:hidden text-3xl text-ink"
              onClick={() => setShow(!show)}
              aria-expanded={show}
              aria-label={show ? t("nav.closeMenu") : t("nav.openMenu")}
            >
              {show ? <BsX /> : <BsList />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}

        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            show ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="px-1 pb-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  onClick={() => setShow(false)}
                  className={`block p-4 rounded-xl hover:bg-main/10 hover:text-main duration-300 ${
                    active === item.id ? "text-main bg-main/10" : "text-copy"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#contact"
                onClick={() => setShow(false)}
                className="flex justify-center items-center gap-2 text-center py-3 rounded-xl bg-brand text-white"
              >
                <span>{t("nav.hire")}</span>
                <IoBriefcase />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
