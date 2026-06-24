import React, { useState } from "react";
import { IoSend } from "react-icons/io5";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [load, setLoad] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone validation
    const phoneRegex = /^[\d\s\-+()]+$/;
    if (!formData.number.trim()) {
      newErrors.number = "Phone number is required";
    } else if (formData.number.trim().length < 10) {
      newErrors.number = "Phone number must be at least 10 digits";
    } else if (!phoneRegex.test(formData.number)) {
      newErrors.number = "Invalid phone number format";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const form = new FormData(e.target);
    try {
      setLoad(true);
      const response = await fetch(
        "https://formsubmit.co/mohammed___dev@hotmail.com",
        {
          method: "POST",
          body: form,
        },
      );
      if (response.status === 200) {
        e.target.reset();
        setFormData({ name: "", email: "", number: "", message: "" });
        setSuccess(true);
      }
      e.target.reset();
    } catch (er) {
      setSuccess(false);
      console.log(er.message);
    } finally {
      setLoad(false);
    }
  }

  setTimeout(() => setSuccess(false), 8000);
  return (
    <>
      {success && (
        <div
          className="
      fixed top-24 left-1/2
      -translate-x-1/2
      z-[999]
      px-6 py-4
      rounded-2xl
      bg-white/90
      backdrop-blur-xl
      border border-green-200
      flex items-center gap-3
      animate-slideDown
      "
          style={{
            boxShadow: "0 10px 40px rgba(16,185,129,.15)",
          }}
        >
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
            ✓
          </div>

          <span className="text-slate-700 font-medium">
            Message sent successfully
          </span>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        data-aos="fade-right"
        className="
    relative
    overflow-hidden
    w-full
    md:w-2/3
    md:p-8
    p-4
    rounded-[30px]
    border
    border-slate-200
    bg-white
    flex
    flex-col
    gap-6
    "
        style={{
          boxShadow: "0px 15px 50px rgba(15,23,42,.04)",
        }}
      >
        {/* glow */}

        <div
          className="
    absolute
    top-0
    right-0
    w-40
    h-40
    rounded-full
    bg-blue-100/40
    blur-3xl
    "
        />

        {[
          {
            name: "name",
            type: "text",
            placeholder: "Your Name",
          },

          {
            name: "email",
            type: "email",
            placeholder: "Your Email",
          },

          {
            name: "number",
            type: "tel",
            placeholder: "Phone Number",
          },
        ].map((field) => (
          <div key={field.name} className="relative z-10">
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="
          w-full
          md:p-4
          p-2
          rounded-2xl
          bg-slate-50
          border
          border-slate-200
          outline-none
          transition-all
          duration-300
          focus:border-blue-400
          focus:bg-white
          "
            />

            {errors[field.name] && (
              <p className="mt-2 text-red-500 text-sm">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <div className="relative z-10">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="
        w-full
        h-[180px]
        resize-none
        p-4
        rounded-2xl
        bg-slate-50
        border
        border-slate-200
        outline-none
        transition-all
        duration-300
        focus:border-blue-400
        focus:bg-white
        "
          />

          {errors.message && (
            <p className="mt-2 text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <button
          disabled={load}
          className="
      relative
      overflow-hidden
      md:py-4
      py-2
      rounded-2xl
      bg-main
      text-white
      font-medium
      hover:scale-[1.02]
      transition-all
      duration-500
      disabled:opacity-70
      "
          style={{
            boxShadow: "0px 10px 25px rgba(59,130,246,.25)",
          }}
        >
          {load ? (
            <div className="flex justify-center items-center gap-3">
              <div
                className="
      w-5
      h-5
      border-2
      border-white/30
      border-t-white
      rounded-full
      animate-spin
      "
              />

              <span>Sending...</span>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-2 group">
              <span>Send Message</span>

              <IoSend
                className="
      text-lg
      transition-all
      duration-500
      group-hover:translate-x-1
      group-hover:-translate-y-1
      "
              />
            </div>
          )}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
