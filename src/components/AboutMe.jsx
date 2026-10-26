import SectionHeader from "./SectionHeader";
import { useI18n } from "../i18n/I18nProvider";

function AboutMe() {
  const { t } = useI18n();
  const interests = t("about.interests");

  const stats = [
    { value: "10+", label: t("about.stats.projects") },
    { value: "3+", label: t("about.stats.experience") },
    { value: "∞", label: t("about.stats.learning") },
  ];

  return (
    <section id="about" className="py-24 bg-alt">
      <div className="container mx-auto">
        <SectionHeader
          label={t("about.label")}
          title={t("about.title")}
          desc={t("about.desc")}
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* About Text */}

          <div data-aos="fade-up">
            <h3 className="text-3xl font-bold text-ink mb-6 leading-snug">
              {t("about.heading")}
            </h3>

            <p className="text-copy leading-7">
              {t("about.p1Before")}
              <span className="font-semibold text-main">
                {t("about.p1Name")}
              </span>
              {t("about.p1After")}
            </p>

            <p className="text-copy leading-7 my-3">{t("about.p2")}</p>

            <p className="text-copy leading-7">{t("about.p3")}</p>

            {/* Quick stats */}

            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`p-3 text-center ${
                    idx < stats.length - 1 ? "border-e border-line" : ""
                  }`}
                >
                  <h2 className="text-main font-bold text-3xl">{stat.value}</h2>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}

          <div
            data-aos="fade-up"
            className="relative overflow-hidden rounded-[30px] bg-card p-4 md:p-8 border border-line shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
          >
            <div className="absolute top-0 end-0 w-40 h-40 rounded-full bg-main/10 blur-3xl" />

            <h3 className="relative text-2xl font-bold mb-8 text-ink">
              {t("about.interestsTitle")}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {interests.map((item, idx) => (
                <div
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                  className="group relative overflow-hidden md:p-5 p-3 rounded-2xl border border-line bg-inset/60 hover:-translate-y-2 hover:border-main/50 transition-all duration-500"
                >
                  <div className="absolute top-4 end-4 w-2 h-2 rounded-full bg-main transition-all duration-500 group-hover:scale-[3] group-hover:opacity-20" />

                  <span className="relative text-copy text-sm md:text-base font-medium group-hover:text-main transition-colors duration-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
