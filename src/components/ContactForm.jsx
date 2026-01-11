import React, { useState } from "react";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [load, setLoad] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    try {
      setLoad(true);
      const response = await fetch(
        "https://formsubmit.co/mohammed___dev@hotmail.com",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.status === 200) {
        e.target.reset();
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
        <input
          type="text"
          name="name"
          className="text-body bg-blue-100/10 w-full border border-blue-300 p-4 rounded-md outline-none"
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          className="text-body bg-blue-100/10 w-full border border-blue-300 p-4 rounded-md outline-none"
          placeholder="Your Email Address"
        />
        <input
          type="number"
          name="number"
          className="text-body bg-blue-100/10 w-full border border-blue-300 p-4 rounded-md outline-none"
          placeholder="Your Number "
        />
        <textarea
          name="message"
          id="mesaage"
          className="w-full h-[250px] text-body bg-blue-100/10 p-4 resize-none border border-blue-300 outline-none rounded-md"
          placeholder="Send message..."
        ></textarea>
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
