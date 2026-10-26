import React, { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import { useI18n } from "../i18n/I18nProvider";
import { profile } from "../data/profile";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s\-+()]+$/;

const emptyForm = { name: "", email: "", number: "", message: "" };

const fieldClass =
  "w-full md:p-4 p-3 rounded-2xl bg-inset/60 border border-line text-ink placeholder:text-muted outline-none transition-all duration-300 focus:border-main focus:bg-card";

const ContactForm = () => {
  const { t } = useI18n();
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [load, setLoad] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(emptyForm);

  // Hide the success toast after a few seconds.
  useEffect(() => {
    if (!success) return undefined;
    const timer = setTimeout(() => setSuccess(false), 8000);
    return () => clearTimeout(timer);
  }, [success]);

  // Errors are stored as translation keys so they follow the active language.
  const validateForm = () => {
    const newErrors = {};
    const name = formData.name.trim();
    const email = formData.email.trim();
    const number = formData.number.trim();
    const message = formData.message.trim();

    if (!name) newErrors.name = "nameRequired";
    else if (name.length < 2) newErrors.name = "nameShort";

    if (!email) newErrors.email = "emailRequired";
    else if (!EMAIL_REGEX.test(email)) newErrors.email = "emailInvalid";

    if (!number) newErrors.number = "numberRequired";
    else if (number.length < 10) newErrors.number = "numberShort";
    else if (!PHONE_REGEX.test(number)) newErrors.number = "numberInvalid";

    if (!message) newErrors.message = "messageRequired";
    else if (message.length < 10) newErrors.message = "messageShort";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;

    const form = new FormData(e.target);
    setFailed(false);
    try {
      setLoad(true);
      const response = await fetch(
        `https://formsubmit.co/${profile.email}`,
        { method: "POST", body: form },
      );
      if (response.ok) {
        setFormData(emptyForm);
        setSuccess(true);
      } else {
        setFailed(true);
      }
    } catch {
      setFailed(true);
    } finally {
      setLoad(false);
    }
  }

  const fields = [
    { name: "name", type: "text", autoComplete: "name" },
    { name: "email", type: "email", autoComplete: "email", ltr: true },
    { name: "number", type: "tel", autoComplete: "tel", ltr: true },
  ];

  return (
    <>
      {success && (
        <div
          role="status"
          className="fixed top-24 left-1/2 -translate-x-1/2 z-[999] px-6 py-4 rounded-2xl bg-card/95 backdrop-blur-xl border border-green-300 flex items-center gap-3 animate-slideDown shadow-[0_10px_40px_rgba(16,185,129,.2)]"
        >
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
            ✓
          </div>
          <span className="text-ink font-medium">{t("form.success")}</span>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        data-aos="fade-up"
        className="relative overflow-hidden w-full md:w-2/3 md:p-8 p-4 rounded-[30px] border border-line bg-card flex flex-col gap-6 shadow-[0_15px_50px_rgba(15,23,42,.05)]"
      >
        <div className="absolute top-0 end-0 w-40 h-40 rounded-full bg-main/10 blur-3xl" />

        {fields.map((field) => (
          <div key={field.name} className="relative z-10">
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={t(`form.${field.name}`)}
              aria-label={t(`form.${field.name}`)}
              aria-invalid={errors[field.name] ? "true" : undefined}
              autoComplete={field.autoComplete}
              dir={field.ltr ? "auto" : undefined}
              className={fieldClass}
            />
            {errors[field.name] && (
              <p className="mt-2 text-red-500 text-sm">
                {t(`form.errors.${errors[field.name]}`)}
              </p>
            )}
          </div>
        ))}

        <div className="relative z-10">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("form.message")}
            aria-label={t("form.message")}
            aria-invalid={errors.message ? "true" : undefined}
            className={`${fieldClass} h-[180px] resize-none`}
          />
          {errors.message && (
            <p className="mt-2 text-red-500 text-sm">
              {t(`form.errors.${errors.message}`)}
            </p>
          )}
        </div>

        {failed && (
          <p role="alert" className="relative z-10 text-red-500 text-sm">
            {t("form.failure")}
          </p>
        )}

        <button
          type="submit"
          disabled={load}
          className="relative overflow-hidden md:py-4 py-3 rounded-2xl bg-brand text-white font-medium hover:scale-[1.02] transition-all duration-500 disabled:opacity-70 shadow-[0_10px_25px_rgba(26,122,194,.25)]"
        >
          {load ? (
            <div className="flex justify-center items-center gap-3">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>{t("form.sending")}</span>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-2 group">
              <span>{t("form.send")}</span>
              <IoSend className="text-lg rtl:-scale-x-100" />
            </div>
          )}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
