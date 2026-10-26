import { BsDownload, BsGithub } from "react-icons/bs";
import { useI18n } from "../i18n/I18nProvider";
import { profile } from "../data/profile";

const techStack = ["React", "Next.js", "TypeScript", "Python", "Odoo", "ERP Systems"];

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center overflow-hidden relative pt-28 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-alt via-canvas to-main/10" />

      {/* Blur Effects */}
      <div className="absolute top-20 start-10 w-72 h-72 bg-main/15 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute bottom-20 end-10 w-80 h-80 bg-cyan-400/15 blur-[120px] rounded-full -z-10"></div>

      <div
        data-aos="fade-up"
        className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16"
      >
        {/* Text */}
        <div className="max-w-2xl text-center md:text-start">
          <span className="inline-block px-4 py-2 rounded-full bg-main/10 text-main text-sm font-medium">
            {t("hero.badge")}
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-ink">
            {t("hero.hello")}{" "}
            <span className="text-main block">{t("hero.name")}</span>
          </h1>

          <h2 className="mt-3 text-2xl md:text-4xl font-semibold text-copy">
            {t("hero.tagline")}
          </h2>

          <p className="mt-6 text-muted leading-7 text-base md:text-lg">
            {t("hero.description")}
          </p>

          {/* Tech stack */}

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
            {techStack.map((tech) => (
              <span
                key={tech}
                dir="ltr"
                className="px-4 py-2 bg-card border border-line rounded-full shadow-sm text-sm text-copy hover:-translate-y-1 duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">
            <a
              download={profile.cvFileName}
              href={profile.cv}
              className="flex items-center gap-3 px-5 md:px-7 py-3 md:py-4 bg-brand text-white rounded-xl md:rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl duration-300"
            >
              <BsDownload />
              {t("hero.cv")}
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href={profile.github}
              className="flex items-center gap-3 px-5 md:px-7 py-3 md:py-4 rounded-xl md:rounded-2xl border border-line bg-card text-ink hover:border-main hover:scale-105 duration-300"
            >
              <BsGithub />
              {t("hero.github")}
            </a>
          </div>
        </div>

        {/* Image */}

        <div className="relative">
          <div className="absolute inset-0 scale-125 rounded-full bg-gradient-to-r from-main/20 to-cyan-300/20 blur-3xl"></div>

          <div className="relative w-[260px] md:w-[400px] aspect-square">
            <div className="absolute inset-0 rounded-full border border-main/50 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full border border-cyan-300/60"></div>

            <div className="overflow-hidden rounded-full backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl">
              <img
                src="/images/avatar.png"
                alt={t("hero.avatarAlt")}
                width="420"
                height="420"
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
