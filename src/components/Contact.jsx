import SectionHeader from "./SectionHeader";

const ContactMe = () => {
  return (
    <section id="contact" className="py-16 container mx-auto">
      <SectionHeader
        title="ContactMe"
        desc="if you want my services just contact me in what you want"
      />
      <div className="container flex flex-col md:flex-row justify-between gap-20">
        <form
          data-aos="fade-right"
          className="w-full flex flex-col gap-5 md:w-2/3"
        >
          <input
            type="text"
            className="text-body bg-blue-100/10 w-full border border-blue-300 p-4 rounded-md outline-none"
            placeholder="Your Name"
          />
          <input
            type="number"
            className="text-body bg-blue-100/10 w-full border border-blue-300 p-4 rounded-md outline-none"
            placeholder="Your Number "
          />
          <textarea
            name="message"
            id="mesaage"
            className="w-full h-[250px] md:h-[300px] text-body bg-blue-100/10 p-4 resize-none border border-blue-300 outline-none rounded-md"
            placeholder="Send message..."
          ></textarea>
          <button
            type="submit"
            className="text-main bg-transparent py-2 px-6 border border-blue-400 rounded-md duration-500 hover:!text-white hover:bg-blue-500 "
          >
            Send
          </button>
        </form>
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
                className="block my-5 text-main"
              >
                Telephone: +20-150-12484-89
              </a>
            </div>
            <div className="text-center p-3 text-lg text-body rounded-md bg-blue-200/50">
              <div className="relative left-1/2 -translate-x-1/2 flex justify-center items-center h-[70px] w-[70px] bg-white rounded-full">
                <i className="bi bi-geo-alt text-body"></i>
              </div>
              <p className="my-5 text-main">
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
                className="block my-5 text-main"
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
