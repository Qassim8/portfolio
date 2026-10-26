import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";
import projects from "../data/projects";
import { useI18n } from "../i18n/I18nProvider";

const ProjectSection = () => {
  const { t } = useI18n();

  return (
    <section id="projects" className="py-16 bg-alt">
      <div className="container">
        <SectionHeader
          label={t("projects.label")}
          title={t("projects.title")}
          desc={t("projects.desc")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 100}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
