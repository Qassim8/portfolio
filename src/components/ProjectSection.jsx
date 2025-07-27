import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader"
import zus from "../images/zus.jpeg"
import villans from "../images/villans.jpg"
import onpoint from "../images/onpoints.net.jpeg"
import bareeq from "../images/bareeq.jpeg"
import doctory from "../images/doctory.jpeg"

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
      title: "Onpoint",
      description:
        "A Saudi-based company website that offers delivery and various tech services. Users can place custom delivery orders, set their own prices, and track the status of their requests.",
      image: onpoint,
      link: "https://onpoints.net/",
    },
    {
      title: "Bareq Alshati",
      description:
        "A corporate website for a Saudi-based business consulting firm. It showcases company details, mission, vision, and services, with features for users to request consultations or contact the team directly.",
      image: bareeq,
      link: "https://bareqrt.com/",
    },
    {
      title: "Doctory",
      description:
        "A hospital web application designed to display key statistics such as patient visits, surgeries, and bookings. It allows administrators to add doctors and patients, schedule appointments, and manage pharmacy items with filtering by department. (Project still under development)",
      image: doctory,
      link: "",
    },
  ];
  return (
    <section className="py-20 container mx-auto">
      <SectionHeader
        title="myProjects"
        desc="here i show you most of the technical and basic skills that i have"
      />
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} myProject={project} />
        ))}
      </div>
    </section>
  );
};
export default ProjectSection;
