import ContactForm from "./ContactForm";
import SectionHeader from "./SectionHeader";
import { BsPhone, BsGeoAlt, BsEnvelope } from "react-icons/bs";

const ContactMe = () => {
  return (
    <section id="contact" className="py-16 container mx-auto">
      <SectionHeader
        title="ContactMe"
        desc="if you want my services just contact me"
      />
      <div className="container flex flex-col md:flex-row items-center gap-20">
        <ContactForm />
        <div className="w-full md:w-[35%] order-first md:order-last">
          <div className="flex flex-col gap-6">
            {[
              {
                icon: <BsPhone />,
                title: "Phone",
                value: "+20-150-12484-89",
                link: "https://wa.me/201501248489",
              },
              {
                icon: <BsGeoAlt />,
                title: "Location",
                value: "Badr City, Cairo, Egypt",
              },
              {
                icon: <BsEnvelope />,
                title: "Email",
                value: "mohammed___dev@hotmail.com",
                link: "mailto:mohammed___dev@hotmail.com",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 120}
                className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        bg-white
        md:p-6
        p-3
        border
        border-slate-200
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-blue-300
        "
                style={{
                  boxShadow:
                    "0px 10px 30px rgba(15,23,42,.04), 0px 1px 3px rgba(15,23,42,.05)",
                }}
              >
                {/* Background glow */}

                <div
                  className="
          absolute
          -top-10
          -right-10
          w-32
          h-32
          rounded-full
          bg-blue-100/0
          blur-3xl
          transition-all
          duration-700
          group-hover:bg-blue-200/40
          "
                />

                <div className="relative flex flex-col md:flex-row items-center gap-3 md:gap-5 p-3">
                  {/* Icon */}

                  <div
                    className="
            flex-shrink-0
            w-[45px] md:w-[65px] 
            h-[45px] md:h-[65px]
            rounded-2xl
            bg-slate-50
            flex
            justify-center
            items-center
            text-2xl
            text-main
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:rotate-6
            "
                  >
                    {item.icon}
                  </div>

                  {/* Content */}

                  <div className="text-center md:text-left">
                    <p className="text-slate-400 text-sm mb-1">{item.title}</p>

                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                text-body
                font-medium
                transition-colors
                duration-300
                group-hover:text-main
                "
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-body font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactMe;
