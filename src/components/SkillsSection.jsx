import SectionHeader from "./SectionHeader";
import { useI18n } from "../i18n/I18nProvider";
import { skills } from "../data/profile";

const SkillsSection = () => {
  const { t } = useI18n();

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto">
        <SectionHeader
          label={t("skills.label")}
          title={t("skills.title")}
          desc={t("skills.desc")}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
          {skills.map(({ img, title }, idx) => (
            <div
              key={title}
              data-aos="fade-up"
              data-aos-delay={(idx % 6) * 80}
              data-aos-duration="700"
              className="group relative overflow-hidden rounded-xl bg-card p-3 flex flex-col items-center justify-center gap-3 border border-line transition-all duration-500 hover:-translate-y-3 hover:border-main/50"
            >
              {/* Soft glow */}

              <div className="absolute w-32 h-32 rounded-full bg-main/0 blur-3xl transition-all duration-700 group-hover:bg-main/20" />

              {/* Icon */}

              <div className="relative z-10 w-[90px] h-[90px] rounded-2xl bg-inset flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <img
                  src={img}
                  alt=""
                  width="55"
                  height="55"
                  loading="lazy"
                  className="w-[55px] h-[55px] object-contain"
                />
              </div>

              {/* Title */}

              <h3
                dir="ltr"
                className="relative z-10 text-lg font-semibold text-copy transition-colors duration-300 group-hover:text-main"
              >
                {title}
              </h3>

              <div className="h-[3px] w-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
