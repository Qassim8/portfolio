import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import AboutMe from "../components/AboutMe";
import SkillsSection from "../components/SkillsSection";
import ContactMe from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 2000, once: true });
    }
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMe />
      <SkillsSection />
      <ProjectSection />
      <ContactMe />
      <Footer />
    </>
  );
};
export default Home;
