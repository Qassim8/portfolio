import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { useI18n } from "../i18n/I18nProvider";

const ProjectCard = ({ project }) => {
  const { t, lang } = useI18n();
  const title = project.title[lang];
  const Arrow = lang === "ar" ? IoArrowBack : IoArrowForward;

  return (
    <div className="group overflow-hidden rounded-[28px] border border-line bg-card hover:-translate-y-2 duration-500 transition-all flex flex-col h-full shadow-[0_12px_30px_rgba(15,23,42,.05)]">
      {/* Image */}

      <div className="relative overflow-hidden h-[240px] md:h-[300px]">
        <img
          src={project.image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Badges */}

        <div className="absolute top-4 end-4 flex gap-2">
          {project.featured && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold text-slate-900 bg-amber-300">
              {t("projects.featured")}
            </span>
          )}
          <span className="px-3 py-1 rounded-full text-xs text-white bg-black/40 backdrop-blur-md border border-white/20">
            {project.status === "dev" ? t("projects.inDev") : t("projects.badge")}
          </span>
        </div>

        {/* Title */}

        <h3 className="absolute bottom-5 start-5 end-5 text-white text-xl font-bold z-10">
          {title}
        </h3>
      </div>

      {/* Content */}

      <div className="flex flex-col flex-grow p-4 md:p-6">
        <p className="text-copy leading-7 text-sm md:text-base flex-grow line-clamp-5">
          {project.description[lang]}
        </p>

        {project.tags && (
          <ul dir="ltr" className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-main/10 text-main"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/button mt-6 flex items-center justify-center gap-2 py-3 rounded-2xl bg-brand text-white font-medium transition-all duration-500 hover:scale-[1.02] shadow-[0_8px_20px_rgba(26,122,194,.2)]"
          >
            <span>{t("projects.view")}</span>
            <Arrow className="text-lg transition-transform duration-500 ltr:group-hover/button:translate-x-1 rtl:group-hover/button:-translate-x-1" />
          </a>
        ) : (
          <p className="mt-6 py-3 text-center rounded-2xl border border-dashed border-line text-muted text-sm">
            {t("projects.comingSoon")}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
