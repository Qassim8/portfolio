import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { useI18n } from "../i18n/I18nProvider";
import { profile } from "../data/profile";

function Footer() {
  const { t } = useI18n();

  const socials = [
    { name: "GitHub", icon: <BsGithub />, link: profile.github },
    { name: "LinkedIn", icon: <BsLinkedin />, link: profile.linkedin },
    { name: "WhatsApp", icon: <BsWhatsapp />, link: profile.whatsapp },
  ].filter((item) => item.link);

  return (
    <footer className="relative overflow-hidden py-10 mt-24 border-t border-line bg-card">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full bg-main/10 blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center gap-5">
          <h2 dir="ltr" className="font-bold text-2xl text-ink">
            {"<"}
            <span className="text-main">MQ</span>
            {" />"}
          </h2>

          <p className="text-muted text-center max-w-lg leading-7">
            {t("footer.text")}
          </p>

          <div className="flex gap-4">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.link}
                aria-label={item.name}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-line bg-inset/60 flex items-center justify-center text-main transition-all duration-500 hover:-translate-y-2 hover:border-main/50"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="mt-5 text-sm text-muted text-center">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-main">{t("hero.name")}</span>
            {" • "}
            {t("footer.rights")}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
