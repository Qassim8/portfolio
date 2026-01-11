import ContactForm from "./ContactForm";
import SectionHeader from "./SectionHeader";

const ContactMe = () => {
  return (
    <section id="contact" className="py-16 container mx-auto">
      <SectionHeader
        title="ContactMe"
        desc="if you want my services just contact me in what you want"
      />
      <div className="container flex flex-col md:flex-row items-center gap-20">
        <ContactForm />
        <div
          data-aos="fade-left"
          className="w-full md:w-1/3 order-first md:order-last"
        >
          <div className="flex flex-col gap-5">
            <div className="text-center p-3 text-lg text-body rounded-md bg-blue-200/50">
              <div className="relative left-1/2 -translate-x-1/2 flex justify-center items-center h-[70px] w-[70px] bg-white rounded-full">
                <i className="bi bi-phone text-body"></i>
              </div>
              <a
                target="_blank"
                href="https://wa.me/201501248489"
                rel="noopener noreferrer"
                className="block my-5 text-sm md:text-md text-main"
              >
                Telephone: +20-150-12484-89
              </a>
            </div>
            <div className="text-center p-3 text-lg text-body rounded-md bg-blue-200/50">
              <div className="relative left-1/2 -translate-x-1/2 flex justify-center items-center h-[70px] w-[70px] bg-white rounded-full">
                <i className="bi bi-geo-alt text-body"></i>
              </div>
              <p className="my-5 text-sm md:text-md text-main">
                Location: Badr-City, Cairo, Egypt
              </p>
            </div>
            <div className="text-center p-3 text-lg text-body rounded-md bg-blue-200/50">
              <div className="relative left-1/2 -translate-x-1/2 flex justify-center items-center h-[70px] w-[70px] bg-white rounded-full">
                <i className="bi bi-envelope text-body"></i>
              </div>
              <a
                target="_blank"
                href="mailto:mohammed___dev@hotmail.com"
                rel="noopener noreferrer"
                className="block text-sm md:text-md my-5 text-main"
              >
                Email: mohammed___dev@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactMe;
