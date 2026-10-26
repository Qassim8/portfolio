import ContactForm from "./ContactForm";
import SectionHeader from "./SectionHeader";
import { BsPhone, BsGeoAlt, BsEnvelope } from "react-icons/bs";
import { useI18n } from "../i18n/I18nProvider";
import { profile } from "../data/profile";

const ContactMe = () => {
  const { t } = useI18n();

  const items = [
    {
      icon: <BsPhone />,
      title: t("contact.phone"),
      value: profile.phone,
      link: profile.whatsapp,
      ltr: true,
    },
    {
      icon: <BsGeoAlt />,
      title: t("contact.location"),
      value: t("contact.locationValue"),
    },
    {
      icon: <BsEnvelope />,
      title: t("contact.email"),
      value: profile.email,
      link: `mailto:${profile.email}`,
      ltr: true,
    },
  ];

  return (
    <section id="contact" className="py-16 container mx-auto">
      <SectionHeader
        label={t("contact.label")}
        title={t("contact.title")}
        desc={t("contact.desc")}
      />
      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
        <ContactForm />

        <div className="w-full md:w-[35%] order-first md:order-last">
          <div className="flex flex-col gap-6">
            {items.map((item, idx) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={idx * 120}
                className="group relative overflow-hidden rounded-[28px] bg-card md:p-4 p-2 border border-line transition-all duration-500 hover:-translate-y-2 hover:border-main/50 shadow-[0_10px_30px_rgba(15,23,42,.05)]"
              >
                <div className="absolute -top-10 -end-10 w-32 h-32 rounded-full bg-main/0 blur-3xl transition-all duration-700 group-hover:bg-main/20" />

                <div className="relative flex items-center gap-4 md:gap-5 p-3">
                  <div className="flex-shrink-0 w-[50px] md:w-[65px] h-[50px] md:h-[65px] rounded-2xl bg-inset flex justify-center items-center text-2xl text-main transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-muted text-sm mb-1">{item.title}</p>

                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        dir={item.ltr ? "ltr" : undefined}
                        className="block break-words text-sm md:text-base text-ink font-medium transition-colors duration-300 group-hover:text-main"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-ink font-medium">{item.value}</p>
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
