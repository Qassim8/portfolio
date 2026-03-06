import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";
import zus from "../images/zus.jpeg";
import villans from "../images/villans.jpg";
import niloop from "../images/niloop.png";
import bareeq from "../images/bareeq.jpeg";
import school from "../images/school.jpeg";

const ProjectSection = () => {
  const projects = [
    {
      title: "Zus",
      description:
        "An e-commerce platform where users can explore a wide range of products and filter them by category or brand. The site focuses on a clean shopping experience with smooth navigation and search functionality",
      image: zus,
      link: "https://zus.vercel.app/",
    },
    {
      title: "Villans",
      description:
        "A user-friendly hotel booking platform that allows users to browse hotels, apply filters based on location, price, or category, select rooms, and complete reservations. Users can also modify or cancel bookings if the check-in date hasn’t passed.",
      image: villans,
      link: "https://villans.vercel.app/villans",
    },
    {
      title: "Niloo",
      description:
        "A website for a technology company that provides IT solutions and services. The site features a modern design with sections for company information, services offered, client testimonials, and a contact form for inquiries.",
      image: niloop,
      link: "https://niloop.vercel.app/ar",
    },
    {
      title: "Bareq Alshati",
      description:
        "A corporate website for a Saudi-based business consulting firm. It showcases company details, mission, vision, and services, with features for users to request consultations or contact the team directly.",
      image: bareeq,
      link: "https://bareqrt.com/",
    },
    {
      title: "Al-Fajr Education",
      description:
        "School management system that provides a platform for students, teachers, and administrators to manage academic activities, including attendance tracking, grade management, and communication tools. [This project is currently in development and does not have a live link yet]",
      image: school,
    },
  ];
  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="container">
        <SectionHeader
          title="myProjects"
          desc="here i show you most of the technical and basic skills that i have"
        />
        <div data-aos="zoom-in-up" className="grid md:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} myProject={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectSection;
