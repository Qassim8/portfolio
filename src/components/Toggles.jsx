import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useI18n } from "../i18n/I18nProvider";
import { useTheme } from "../theme/ThemeProvider";

const SaudiFlag = () => (
  <div className="w-6 h-4 rounded-[3px] shadow-sm">
    <img
      src="/images/ksa.png"
      alt="Saudi Arabia"
      className="w-full h-full object-cover"
    />
  </div>
);

const UKFlag = () => (
  <svg
    viewBox="0 0 60 40"
    className="w-6 h-4 rounded-[3px] shadow-sm"
    aria-hidden="true"
  >
    <rect width="60" height="40" fill="#012169" />
    <path d="M0 0L60 40M60 0L0 40" stroke="#fff" strokeWidth="8" />
    <path d="M0 0L60 40M60 0L0 40" stroke="#c8102e" strokeWidth="3" />
    <path d="M30 0V40M0 20H60" stroke="#fff" strokeWidth="13" />
    <path d="M30 0V40M0 20H60" stroke="#c8102e" strokeWidth="8" />
  </svg>
);

const Toggles = () => {
  const { t, lang, toggleLang } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-3 md:gap-4">
      {/* Language: shows the language you will switch to */}

      <button
        type="button"
        onClick={toggleLang}
        aria-label={t("toggles.toOtherLabel")}
        className="flex items-center gap-2 text-sm font-semibold text-copy hover:text-main duration-300"
      >
        {lang === "ar" ? <UKFlag /> : <SaudiFlag />}
        <span>{t("toggles.toOther")}</span>
      </button>

      {/* Theme: on / off switch (always left-to-right so the knob direction is stable) */}

      <button
        type="button"
        dir="ltr"
        role="switch"
        aria-checked={isDark}
        onClick={toggleTheme}
        aria-label={isDark ? t("toggles.toLight") : t("toggles.toDark")}
        title={isDark ? t("toggles.toLight") : t("toggles.toDark")}
        className={`relative flex items-center w-14 h-7 rounded-full shrink-0 transition-colors duration-300 ${
          isDark ? "bg-main/30" : "bg-amber-300/60"
        }`}
      >
        <BsSunFill className="absolute left-1.5 text-[13px] text-amber-500" />
        <BsMoonStarsFill className="absolute right-1.5 text-[13px] text-main" />
        <span
          className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
            isDark ? "translate-x-7" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default Toggles;
