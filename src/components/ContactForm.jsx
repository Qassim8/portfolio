import React, { useState } from "react";

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
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
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
          className="fixed top-32 left-1/2 -translate-x-1/2 
    bg-green-600/90 backdrop-blur-md text-white 
    py-3 px-6 rounded-xl shadow-xl 
    flex items-center gap-3 
    animate-slideDown z-[9999]"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>

          <span className="font-medium">
            Your message has been sent, Thanks for reaching out
          </span>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        data-aos="fade-right"
        className="w-full flex flex-col gap-5 md:w-2/3"
      >
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`text-body bg-blue-100/10 w-full border p-4 rounded-md outline-none transition-colors ${
              errors.name ? "border-red-500" : "border-blue-300"
            }`}
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`text-body bg-blue-100/10 w-full border p-4 rounded-md outline-none transition-colors ${
              errors.email ? "border-red-500" : "border-blue-300"
            }`}
            placeholder="Your Email Address"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className={`text-body bg-blue-100/10 w-full border p-4 rounded-md outline-none transition-colors ${
              errors.number ? "border-red-500" : "border-blue-300"
            }`}
            placeholder="Your Number"
          />
          {errors.number && (
            <p className="text-red-500 text-sm mt-1">{errors.number}</p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            id="mesaage"
            value={formData.message}
            onChange={handleChange}
            className={`w-full h-[250px] text-body bg-blue-100/10 p-4 resize-none border outline-none rounded-md transition-colors ${
              errors.message ? "border-red-500" : "border-blue-300"
            }`}
            placeholder="Send message..."
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        {load ? (
          <button
            type="submit"
            disabled
            className="text-white bg-blue-300 py-2 px-6 border border-blue-300 rounded-md"
          >
            Sending...
          </button>
        ) : (
          <button
            type="submit"
            className="text-main bg-transparent py-2 px-6 border border-blue-400 rounded-md duration-500 hover:!text-white hover:bg-blue-500 "
          >
            Send
          </button>
        )}
      </form>
    </>
  );
};

export default ContactForm;
